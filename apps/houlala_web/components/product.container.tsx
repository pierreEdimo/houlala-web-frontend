import { Product } from "../types/product";
import styles from "../styles/product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HoulalaCard } from "ui";

export function ProductContainer({ product }: { product: Product }) {
  return (
    <>
      <Link
        style={{
          cursor: "pointer",
        }}
        href={{
          pathname: "/product/[sku]",
          query: { sku: product.productSku },
        }}
      >
        <div>
          <HoulalaCard style={{ border: "none" }}>
            <div className={styles.productContainer}>
              <Image
                src={product.imageUrl}
                style={{ borderRadius: "0.3rem" }}
                alt={"product-image"}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
          </HoulalaCard>
          <h3>{product.name}</h3>
          <p>{product.sellingPrice} FCFA</p>
        </div>
      </Link>
    </>
  );
}
