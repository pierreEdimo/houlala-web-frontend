import { useLiveQuery } from "dexie-react-hooks";
import database from "../localDb/database.config";
import NoItems from "./no.items";
import NoShoppingCart from "../public/images/no-shopping-cart.png";
import OfflineCartItemContainer from "./offline.cart.item.container";
import { useRouter } from "next/router";
import styles from "../styles/order.module.scss";
import HoulalaFilledButton from "ui/components/filled-button/houlala.filled.button";

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
                <OfflineCartItemContainer key={item.locationId} order={item} />
              ))
            }
            <div style={{ height: "1rem" }}></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <div className={styles.checkout}>
                <HoulalaFilledButton onClick={() => router.push("/cart/checkout").then()}
                                     style={{ background: "orange", border: "none", width: "100%" }}>
                  Caisse
                </HoulalaFilledButton>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default OfflineCart;