import { NextPage } from "next";
import { NestedLayout } from "../../components/nested.layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import BackButton from "../../components/back.button";
import { useCartItemList } from "../../swrHooks/order.hooks";
import NoItems from "../../components/no.items";
import noCart from "../../public/images/no-shopping-cart.png";
import { Card } from "../../components/card";
import store from "../../public/images/store.png";
import Avatar from "../../components/avatar";
import styles from "../../styles/order.module.scss";
import Image from "next/image";
import { HoulalaSpinner } from "ui";
import { UserIdState } from "../../state/user.id.state";

const Order: NextPage = () => {
  const [isLoggedIn] = useRecoilState(AuthAtomState);
  const [userId, setUserId] = useRecoilState(UserIdState);
  const router = useRouter();
  const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;

  const { items, isLoading, isError } = useCartItemList(
    `${ORDER_URL}/confirmed/users/${userId}`
  );

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login").then();
    }
  });

  if (isLoading) return <HoulalaSpinner />;

  if (isError) return <div>...Error</div>;

  return (
    <NestedLayout>
      <BackButton title={"Mes Commandes"} />
      <div style={{ height: "10px" }}></div>
      {items?.length! < 1 ? (
        <NoItems
          errorMessage={"vous n'avez pas encore effectue de commande"}
          iconImage={noCart}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {items?.map((order) => (
            <Card key={order.id}>
              <div className={styles.itemsHeader}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                    }}
                  >
                    <Avatar imageUrl={store} type={"thumbnail"} />
                  </div>
                  <h3>{order.location.name}</h3>
                </div>
                <p style={{ marginTop: "10px" }}>
                  Status <b>{order.status}</b>
                </p>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                {order.cartItems.map((item) => (
                  <div
                    key={item.productSku}
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "140px",
                        height: "160px",
                        background: "rgba(234,234, 234, 0.4)",
                        borderRadius: "5px",
                      }}
                    >
                      <Image
                        src={item.imageUrl}
                        layout={"fill"}
                        objectFit={"cover"}
                        style={{ borderRadius: "5px" }}
                        alt={"product-image"}
                      />
                    </div>
                    <div>
                      <h3>{item.product}</h3>
                      <p>{item.price}</p>
                      <p>{item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <div className={styles.cardFooter}>
                <p>
                  <b>Quantite:</b> {order.totalQuantity}
                </p>
                <p>
                  <b>Prix:</b> {order.totalPrice}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </NestedLayout>
  );
};

export default Order;
