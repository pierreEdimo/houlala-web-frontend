import { NextPage } from "next";
import { useRouter } from "next/router";
import { NestedLayout } from "../../../components/nested.layout";
import { useLocation } from "../../../swrHooks/location.hooks";
import BackButton from "../../../components/back.button";
import { useProductList } from "../../../swrHooks/product.hooks";
import NoItems from "../../../components/no.items";
import NoProducts from "../../../public/images/stock.png";
import styles from "../../../styles/product.module.scss";
import { ProductContainer } from "../../../components/product.container";
import { HoulalaSpinner } from "ui";

const Index: NextPage = () => {
  const router = useRouter();
  const { word, locationId } = router.query;
  const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  const { location, isLoading, isError } = useLocation(
    `${LOCATION_URL}/${locationId}`
  );
  const { products } = useProductList(
    `${PRODUCT_URL}/location/${location?.uniqueIdentifier}?limit=0`
  );

  if (isLoading) {
    return (
      <>
        <HoulalaSpinner />
      </>
    );
  }

  if (isError) {
    return <div>...Error</div>;
  }

  const filteredProducts = () => {
    return products?.filter((x) =>
      x.name.toLowerCase().includes(word!.toString().toLowerCase())
    )!;
  };

  return (
    <NestedLayout>
      <BackButton title={`Resultats(${location?.name})`} />
      <div style={{ height: "10px" }}></div>
      <>
        {filteredProducts()?.length! < 1 ? (
          <NoItems
            errorMessage={"Aucuns resultat n'a ete trouve pour votre recherhe"}
            iconImage={NoProducts}
          />
        ) : (
          <div className={styles.productGrid}>
            {filteredProducts()?.map((x) => (
              <ProductContainer key={x._id} product={x} />
            ))}
          </div>
        )}
      </>
    </NestedLayout>
  );
};

export default Index;
