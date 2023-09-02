import React from "react";
import { useCategory } from "../swrHooks/category.hooks";
import FruitsLettuces from "./fruits.lettuces";
import NoItems from "./no.items";
import BackButton from "./back.button";
import StoreContainer from "./store.container";
import stock from "../public/images/stock.png";
import { HoulalaSpinner } from "ui";

type CategoryDetailProps = {
  categoryId: string;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ categoryId }: { categoryId: string }) => {
  const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
  const { category, isLoading, isError } = useCategory(`${CATEGORY_URL}/${categoryId}`);

  if (isLoading) return (
    <div>
      <HoulalaSpinner />
    </div>
  );

  if (isError) return <div>...Error</div>;

  switch (category?.name) {
    case "fruits & legumes":
      return (
        <>
          <FruitsLettuces categoryId={category?.id} name={category?.name} />
        </>
      );
    case "boutique":
      return (
        <>
          <StoreContainer categoryId={`${category?.id}`} categoryName={`${category?.name}`} />
        </>
      );
    default:
      return (
        <>
          <BackButton title={`${category?.name}`} />
          <NoItems
            iconImage={stock}
            errorMessage={`Desole nous n'avons pas encore de produit dans la categorie ${category?.name}\n.
                Nous travaillons tres dure pour ameliorer nos services.\n Svp reessayez plutard.`} />
        </>
      );
  }
};

export default CategoryDetail;