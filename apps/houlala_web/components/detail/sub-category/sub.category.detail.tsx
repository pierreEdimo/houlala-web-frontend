import React from "react";
import ProductGrid from "../../grid/product.grid";
import { useSubCategory } from "../../../swrHooks/sub.category.hooks";
import BackButton from "../../back-button/back.button";
import { HoulalaSpinner } from "ui";

type SubCategoryDetailProps = {
  categoryId: number;
};

const SubCategoryDetail: React.FC<SubCategoryDetailProps> = ({
  categoryId,
}) => {
  const CATEGORY_URL = process.env.NEXT_PUBLIC_SUBCATEGORY_URL;
  const { category, isLoading, isError } = useSubCategory(
    `${CATEGORY_URL}/${categoryId}`
  );
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  if (isLoading) return <div><HoulalaSpinner/></div>;
  if (isError) return <div>....Error</div>;

  return (
    <>
      <div>
        <BackButton title={category?.label!} />
        <ProductGrid url={`${PRODUCT_URL}/sub-categories/${categoryId}/size/0`} />
      </div>
    </>
  );
};

export default SubCategoryDetail;
