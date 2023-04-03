import { NextPage } from "next";
import { useRouter } from "next/router";
import { useProduct } from "../../hooks/product.hooks";
import styles from "./product.detail.module.scss";
import Image from "next/image";
import edit from "../../public/images/editing.png";
import ReactMarkdown from "react-markdown";
import NestedLayout from "../../components/nested-layout/nested.layout";
import InsideHeader from "../../components/inside-header/inside.header";


const ProductDetail: NextPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const { product, error, isLoading } = useProduct(`${PRODUCT_URL}/${pid}`);

    if (isLoading) {
        return (
            <div>
                ....Loading
            </div>
        );
    }

    return (
        <NestedLayout>
            <InsideHeader />
            <div style={{height: "1rem"}}></div>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageContent}>
                        <Image src={product!.imageUrl}
                               fill
                               className={styles.thumbnail}
                               alt={"product-image"} />
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <h3>{product!.name}</h3>
                    <br />
                    <p>Prix de vente: <h3>{product!.sellingPrice} XAF</h3></p>
                    <br />
                    <p>Prix d'achat: <h3>{product!.buyingPrice} XAF</h3></p>
                    {/* <br />
                    <button className={styles.editButton}>
                        <Image src={edit} alt={"edit-image"} width={18} height={18} />
                        Modifier le produit
                    </button> */}
                </div>
            </div>
            <br />
            <ReactMarkdown>
                {product!.description}
            </ReactMarkdown>
        </NestedLayout>
    );
};

export default ProductDetail;