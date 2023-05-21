import * as React from "react";
import { HoulalaAvatar } from "ui";
import styles from "./product.item.module.scss";
import Image from "next/image";
import { Product } from "../../types/product";
import { useRouter } from "next/router";

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product-detail/${product._id}`)}
      className={styles.productItem}
    >
      <div className={styles.productRow}>
        <HoulalaAvatar
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "rgb(236, 236, 236)",
            borderRadius: "5px",
          }}
        >
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "5px" }}
            src={product.imageUrl}
            alt={"product-image"}
          />
        </HoulalaAvatar>
        <div>
          <h4>{product.name}</h4>
          <p>{product.sellingPrice} FCFA</p>
          <p>
            Disponible <b>{product.quantity}</b>
          </p>
          {product.totalSell === 0 ? (
            <div></div>
          ) : (
            <p>
              Vendus: <b>{product.totalSell}</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
