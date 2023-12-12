import styles from "../../../styles/category.module.scss";
import { useCategoryList } from "../../../swrHooks/category.hooks";
import AvatarCategoryContainer from "../../ui-container/category/avatar.category.container";
import { HoulalaSpinner } from "ui";

export function HomeCategoryList() {
  const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
  const { categories, isLoading, isError } = useCategoryList(`${CATEGORY_URL}`);

  if (isLoading) return (
    <>
      <HoulalaSpinner />
    </>
  );

  if (isError) return <div>...Error</div>;

  return (
    <div>
      <h2>Categories</h2>
      <div className={styles.homeCategoryContainer}>
        {categories?.map((category) => (
          <AvatarCategoryContainer key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}