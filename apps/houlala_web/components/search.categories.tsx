import React from "react";
import {useCategoryList} from "../swrHooks/category.hooks";
import styles from "../styles/category.module.scss";
import Spinner from "./spinner";
import GridCategoryContainer from "./grid.category.container";

type SearchCategoriesProps = {
    url: string;
}

const SearchCategories: React.FC<SearchCategoriesProps> = ({url}) => {
    const {categories, isLoading, isError} = useCategoryList(url);

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return (
        <>
            <div>...Error</div>
        </>
    )

    return (
        <>
            {
                categories?.length! < 1 ?
                    <div></div> :
                    <div>
                        <h2>Categories</h2>
                        <div className={styles.gridContainer}>
                            {
                                categories?.map((category) =>
                                    <GridCategoryContainer key={category._id} category={category}/>)
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default SearchCategories;