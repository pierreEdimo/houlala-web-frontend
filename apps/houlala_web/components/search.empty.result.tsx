import React from "react";
import {useLocationList} from "../swrHooks/location.hooks";
import {useProductList} from "../swrHooks/product.hooks";
import {useCategoryList} from "../swrHooks/category.hooks";
import styles from "../styles/search.result.module.scss";
import { HoulalaSpinner } from "ui/components/loading-spinner/houlala-spinner";

type SearchEmptyResultProps = {
    productUrl: string;
    locationUrl: string;
    categoryUrl: string;
}

const SearchEmptyResult: React.FC<SearchEmptyResultProps> = ({productUrl, locationUrl, categoryUrl}) => {
    const {locations, isLoading, isError} = useLocationList(locationUrl);
    const {products} = useProductList(productUrl);
    const {categories} = useCategoryList(categoryUrl);

    if (isLoading) return (
        <>
            <HoulalaSpinner/>
        </>
    )

    if (isError) return (
        <>
            <div>..Error</div>
        </>
    )

    return (
        <>
            <div>
                {
                    locations?.length! < 1 &&
                    categories?.length! < 1 &&
                    products?.length! < 1 ?
                        <div className={styles.emptyResult}>
                            <p style={{
                                fontWeight: "bolder",
                                fontSize: "4rem"
                            }}>0</p>
                            <p>Aucuns resultats trouvees pour votre recherche. <br/> Svp reessayez plutard.</p>
                        </div> :
                        <div></div>
                }
            </div>
        </>
    )
}

export default SearchEmptyResult;