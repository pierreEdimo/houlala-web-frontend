import { NextPage } from "next";
import { NestedLayout } from "../../components/layout/mainlayout/nested.layout";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import { useProductList } from "../../swrHooks/product.hooks";
import BackButton from "../../components/back-button/back.button";
import FavoriteProductContainer from "../../components/ui-container/favorite-product/favorite.product.container";
import NoItems from "../../components/no-item/no.items";
import stock from "../../public/images/stock.png";
import { HoulalaSpinner } from "ui";
import { UserIdState } from "../../state/user.id.state";

const Favorites: NextPage = () => {

  const [isLoggedIn] = useRecoilState(AuthAtomState);
  const [userId] = useRecoilState(UserIdState);
  const router = useRouter();
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login").then();
    }
  });

  const { products, isLoading, isError } = useProductList(`${PRODUCT_URL}/favorites/${userId}`);

  if (isLoading) return (
    <>
      <HoulalaSpinner />
    </>
  );

  if (isError) return (
    <div>...Error</div>
  );


  return (
    <NestedLayout>
      <BackButton title={"Mes Favoris"} />
      <div style={{ height: "10px" }}></div>
      {
        products?.length! < 1 ?
          <NoItems errorMessage={"Vous n'avez aucuns Produits dans vos favoris"} iconImage={stock} />
          : <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
            {
              products?.map((product) => (
                <FavoriteProductContainer
                  key={product.id}
                  userId={userId}
                  product={product} />
              ))
            }
          </div>
      }
    </NestedLayout>
  );
};

export default Favorites;