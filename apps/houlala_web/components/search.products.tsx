import React from "react";
import {useProductList} from "../swrHooks/product.hooks";
import Spinner from "./spinner";
import styles from "../styles/grid.module.scss";
import {ProductContainer} from "./product.container";

type SearchProductsProps = {
    url: string
}

const SearchProducts: React.FC<SearchProductsProps> = ({url}) => {
    const {products, isLoading, isError} = useProductList(url);

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    );

    if (isError) return (
        <>
            <div>..Error</div>
        </>
    )

    return (
        <>
            <div>
                {
                    products?.length! < 1 ?
                        <div></div> :
                        <div>
                            <h2>Produits</h2>
                            <div className={styles.gridContainer}>
                                {
                                    products?.map(
                                        (product) =>
                                            <ProductContainer key={product._id} product={product}/>)
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default SearchProducts