import React from "react";
import { useProductList } from "../../hooks/product.hooks";
import { Avatar, BorderedCard } from "ui";
import style from "./product.list.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
  position?: string;
  locationId?: string;
}
const ProductListCard: React.FC<Props> = ({ url, title, position, locationId }) => {
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
        products?.length! < 1 ?
          <div></div> :
          <BorderedCard style={{ padding: "1rem" }}>
            <div className={style.cardHeader}>
              <h3>{title}</h3>
              {
                position === "home" ?
                  <Link href={`/stock/${locationId}`}>
                    <p>Voir tout</p>
                  </Link>
                  : <div></div>
              }
            </div>
            <br />
            <table className={style.productTable} style={{ width: "100%" }}>
              <tr>
                <th>Nom du produit</th>
                <th>Prix d'achat</th>
                <th>Prix de vente</th>
                <th>Quantite</th>
              </tr>
              {
                products?.map((product) => (
                  <tr className={style.productRow} key={product._id}>
                    <td>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem"
                      }}>
                        <Avatar style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "5px"
                        }}>
                          <Image fill
                                 style={{ objectFit: "cover" }}
                                 src={product.imageUrl}
                                 alt={"product-image"} />
                        </Avatar>
                        <p style={{ fontSize: "13.5px" }}>{product.name}</p>
                      </div>
                    </td>
                    <td>
                      <p className={style.textContent}>{product.buyingPrice}</p>
                    </td>
                    <td>
                      <p className={style.textContent}>{product.sellingPrice}</p>
                    </td>
                    <td>
                      <p className={style.textContent}>{product.quantity}</p>
                    </td>
                  </tr>
                ))
              }
            </table>
          </BorderedCard>
      }
    </>
  );
};

export default ProductListCard; 