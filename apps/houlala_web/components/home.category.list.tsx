import styles from "../styles/category.module.scss";
import {useCategoryList} from "../swrHooks/category.hooks";
import Spinner from "./spinner";
import AvatarCategoryContainer from "./avatar.category.container";

export function HomeCategoryList() {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
    const {categories, isLoading, isError} = useCategoryList(`${CATEGORY_URL}`);

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return <div>...Error</div>

    return (
        <div>
            <h2>Categories</h2>
            <div className={styles.homeCategoryContainer}>
                {categories?.map((category) => (
                    <AvatarCategoryContainer key={category._id} category={category}/>
                ))}
            </div>
        </div>
    );
}