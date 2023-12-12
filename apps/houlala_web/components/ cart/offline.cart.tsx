import { useLiveQuery } from "dexie-react-hooks";
import database from "../../localDb/database.config";
import NoItems from "../no-item/no.items";
import NoShoppingCart from "../../public/images/no-shopping-cart.png";
import OfflineCartItemContainer from "../ui-container/offline-cart-item/offline.cart.item.container";
import { useRouter } from "next/router";
import styles from "../../styles/order.module.scss";
import { HoulalaButton } from "ui";

const OfflineCart = () => {
  const items = useLiveQuery(async () => {
    return database.table("offlineOrders").toArray();
  });

  const router = useRouter();

  return (
    <div>
      {
        items?.length! < 1 ? <NoItems errorMessage={"Votre panier est vide."} iconImage={NoShoppingCart} /> :
          <div>
            {
              items?.map((item) => (
                <OfflineCartItemContainer key={item.locationUniqueId} order={item} />
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

export default OfflineCart;