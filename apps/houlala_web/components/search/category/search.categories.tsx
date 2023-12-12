import React from "react";
import {useCategoryList} from "../../../swrHooks/category.hooks";
import styles from "../styles/category.module.scss";
import GridCategoryContainer from "../../ui-container/category/grid.category.container";
import { HoulalaSpinner } from "ui";

type SearchCategoriesProps = {
    url: string;
}

const SearchCategories: React.FC<SearchCategoriesProps> = ({url}) => {
    const {categories, isLoading, isError} = useCategoryList(url);

    if (isLoading) return (
        <>
            <HoulalaSpinner/>
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
                                    <GridCategoryContainer key={category.id} category={category}/>)
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default SearchCategories;