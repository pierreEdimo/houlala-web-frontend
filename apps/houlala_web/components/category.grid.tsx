import styles from "../styles/category.module.scss";
import {useCategoryList} from "../swrHooks/category.hooks";
import GridCategoryContainer from "./grid.category.container";

export function CategoryGrid() {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
    const {categories, isLoading, isError} = useCategoryList(`${CATEGORY_URL}`);

    if (isError) return <div>...Error</div>
    if (isLoading) return <div>...Loading </div>

    return (
        <div className={styles.gridContainer}>
            {categories?.map((category) => (
                <GridCategoryContainer key={category.id} category={category}/>
            ))}
        </div>
    );
}