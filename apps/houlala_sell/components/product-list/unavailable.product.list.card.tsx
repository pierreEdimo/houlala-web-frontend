import React from "react";
import { useProductList } from "../../hooks/product.hooks";
import { Avatar, BorderedCard, Row } from "ui";
import style from "./product.list.module.scss";
import Image from "next/image";

type Props = {
  url: string;
  title: string;
}
const UnavailableProductListCard: React.FC<Props> = ({ url, title }) => {
  const { products, error, isLoading } = useProductList(url);

  if (isLoading) {
    return (
      <div>
        ...Loading
      </div>
    );
  }

  if (error) {
    return (
      <div>
        ...Error
      </div>
    );
  }

  return (
    <>
      {
        products?.length! <= 5 ?
          <div></div> :
          <BorderedCard style={{ padding: "1rem" }}>
            <div className={style.cardHeader}>
              <h3>{title}</h3>
            </div>
            <br />
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              {
                products?.filter((x) => x.quantity <= 5)
                  .map((product) => (
                    <Row key={product._id}>
                      <Avatar style={{
                        width: "120px",
                        height: "140px",
                        backgroundColor: "rgb(236, 236, 236)",
                        borderRadius: "5px"
                      }}>
                        <Image fill
                               style={{ objectFit: "contain" }}
                               src={product.imageUrl}
                               alt={"product-image"} />
                      </Avatar>
                      <div>
                        <h4>{product.name}</h4>
                        <p>{product.sellingPrice} FCFA</p>
                        <p>Disponible: <b>{product.quantity}</b></p>
                      </div>
                    </Row>
                  ))
              }
            </div>
          </BorderedCard>
      }
    </>
  );
};

export default UnavailableProductListCard;