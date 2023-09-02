import React from "react";
import styles from "../styles/fruits.lettuces.module.scss";
import {useSubCategoryList} from "../swrHooks/sub.category.hooks";
import SubCategoryContainer from "./sub.category.container";
import ProductGrid from "./product.grid";
import BackButton from "./back.button";
import {useRouter} from "next/router";

type FruitsLettucesProps = {
    categoryId: number,
    name: string,
}

const FruitsLettuces: React.FC<FruitsLettucesProps> = ({categoryId, name}) => {

    const CATEGORY_URL = process.env.NEXT_PUBLIC_SUBCATEGORY_URL;
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const {categories, isLoading, isError} = useSubCategoryList(`${CATEGORY_URL}/categories/${categoryId}`);
    const router = useRouter();


    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>...Error</div>


    return (
        <>
            <div className={styles.fruitLettucesContainer}>
                <BackButton title={name}/>
                <div className={styles.subCategoryList}>
                    {categories?.map((category) => (
                        <SubCategoryContainer
                            onClick={() => router.push(`/sub-category/${category.id}`)}
                            key={category.id}
                            label={category.label}
                            thumbNailUrl={category.imageUrl}/>
                    ))}
                </div>
                <div style={{height: "20px"}}></div>
                <h2>R&eacute;cemment ajout&eacute;e</h2>
                <ProductGrid url={`${PRODUCT_URL}`}/>
            </div>
        </>
    )
}

export default FruitsLettuces;