import React from "react";
import styles from "../styles/product.module.scss";
import {useProductList} from "../swrHooks/product.hooks";
import {ProductContainer} from "./product.container";
import NoItems from "./no.items";
import stock from "../public/images/stock.png";
import { HoulalaSpinner } from "ui/components/loading-spinner/houlala-spinner";

type ProductGridProps = {
    url: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({url}) => {
    const {products, isLoading, isError} = useProductList(url);

    if (isLoading) return (
        <>
            <div>
                <HoulalaSpinner/>
            </div>
        </>
    )

    if (isError) return <div>...Error</div>

    return (
        <>
            {
                products?.length! < 1 ?
                    <div>
                        <NoItems
                            iconImage={stock}
                            errorMessage={`Desole nous n'avons pas encore de produit de cette categorie\n.
                Nous travaillons tres dure pour ameliorer nos services.\n Svp reessayez plutard.`}/>
                    </div> :
                    <div className={styles.productGrid}>
                        {
                            products?.map((product) => (
                                <ProductContainer key={product._id} product={product}/>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default ProductGrid;