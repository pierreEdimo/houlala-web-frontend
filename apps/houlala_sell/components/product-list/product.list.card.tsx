import React from "react";
import { useProductList } from "../../hooks/product.hooks";
import { HoulalaCard, HoulalaAvatar, HoulalaSpinner } from "ui";
import style from "./product.list.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  title: string;
  url: string;
  position?: string;
  locationId?: string;
};
const ProductListCard: React.FC<Props> = ({
  url,
  title,
  position,
  locationId,
}) => {
  const { products, error, isLoading } = useProductList(url);
  const router = useRouter();

  if (isLoading) {
    return (
      <div>
        <HoulalaSpinner />
      </div>
    );
  }

  if (error) {
    return <div>...Error</div>;
  }

  return (
    <>
      {products?.length! < 1 ? (
        <div></div>
      ) : (
        <HoulalaCard style={{ padding: "1rem" }}>
          <div className={style.cardHeader}>
            <h3>{title}</h3>
            {position === "home" ? (
              <Link href={`/stock/${locationId}`}>
                <p>Voir tout</p>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          <br />
          <table className={style.productTable}>
            <tbody>
              <tr>
                <th className={style.tableTitle}>Image</th>
                <th className={style.tableTitle}>Nom du produit</th>
                <th className={style.tableTitle}>Prix de vente</th>
                <th className={style.tableTitle}>Quantite</th>
              </tr>
            </tbody>
            {products?.map((product) => (
              <tr
                onClick={() => router.push(`/product-detail/${product._id}`)}
                className={style.productRow}
                key={product._id}
              >
                <td>
                  <HoulalaAvatar
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <Image
                      fill
                      style={{ objectFit: "cover" }}
                      src={product.imageUrl}
                      alt={"product-image"}
                    />
                  </HoulalaAvatar>
                </td>
                <td>
                  <p className={style.textContent}>{product.name}</p>
                </td>
                <td>
                  <p className={style.textContent}>
                    {product.sellingPrice} XAF
                  </p>
                </td>
                <td>
                  <p className={style.textContent}>{product.quantity}</p>
                </td>
              </tr>
            ))}
          </table>
        </HoulalaCard>
      )}
    </>
  );
};

export default ProductListCard;
