import { useCartItemList } from "../swrHooks/order.hooks";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { UserIdState } from "../state/user.id.atoms";
import CartItemContainer from "./cart.item.container";
import noShoppingCart from "../public/images/no-shopping-cart.png";
import NoItems from "./no.items";
import { useRouter } from "next/router";
import styles from "../styles/order.module.scss";
import { HoulalaButton, HoulalaSpinner } from "ui";


const OnlineCart = () => {
  const CART_URL = process.env.NEXT_PUBLIC_ORDER_URL;
  const [userId, setUserId] = useRecoilState(UserIdState);
  const router = useRouter();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("userToken")!);
    if (userToken) {
      setUserId(userToken.userId);
    }
  });

  const { items, isLoading, isError } = useCartItemList(`${CART_URL}/carts?userId=${userId}`);

  if (isLoading) return (
    <HoulalaSpinner />
  );

  if (isError) return (
    <div>...Error</div>
  );

  return (
    <div>
      {
        items?.length! < 1 ? <NoItems iconImage={noShoppingCart}
                                      errorMessage={"Votre panier est vide."} /> :
          <div>{
            items?.map((item) => (
              <CartItemContainer
                userId={userId}
                key={item._id}
                order={item} />
            ))
          }
            <div style={{ height: "1rem" }}></div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className={styles.checkout}>
                <HoulalaButton type={"button"} className={"filled"} onClick={() => router.push("/cart/checkout").then()}
                               style={{ width: "100%" }}>
                  Caisse
                </HoulalaButton>
              </div>
            </div>
          </div>
      }

    </div>
  );
};

export default OnlineCart;