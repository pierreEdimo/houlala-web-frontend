import React from "react";
import ProductGrid from "./product.grid";
import {useSubCategory} from "../swrHooks/sub.category.hooks";
import BackButton from "./back.button";

type SubCategoryDetailProps = {
    categoryId: string;
}

const SubCategoryDetail: React.FC<SubCategoryDetailProps> = ({categoryId}: { categoryId: string }) => {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_SUBCATEGORY_URL;
    const {
        category,
        isLoading,
        isError
    } = useSubCategory(`https://api.houlala.store/marketplace/sub-categories/${categoryId}`);
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>{CATEGORY_URL}</div>

    return (
        <>
            <div>
                <BackButton title={category?.label!}/>
                <ProductGrid url={`${PRODUCT_URL}/type/${categoryId}?limit=0`}/>
            </div>
        </>
    )
}

export default SubCategoryDetail;