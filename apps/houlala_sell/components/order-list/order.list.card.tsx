import styles from "./order.list.card.module.scss";
import { BorderedCard } from "ui";
import React from "react";
import { useOrderList } from "../../hooks/order.hooks";
import OrderItem from "../order-item/order.item";
import Link from "next/link";

type Props = {
  url: string;
  title: string;
  locationId?: string
  position?: string;
}

const OrderListCard: React.FC<Props> = ({ url, title, locationId, position }) => {
  const { orders, error, isLoading } = useOrderList(url);

  if (isLoading) {
    return (
      <div>
        ...IsLoading
      </div>
    );
  }

  if (error) {
    return (
      <div>
        ...Error
      </div>
    );
  }

  return (
    <>
      {
        orders?.length! < 1 ?
          <div></div> :
          <BorderedCard style={{ padding: "1rem" }}>
            <div className={styles.cardHeader}>
              <h3>{title}</h3>
              {
                position === "home" ?
                  <Link href={`/orders/${locationId}`}>Voir tout</Link> :
                  <div></div>
              }
            </div>
            <br />
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap:"0.5rem"
            }}>
              {
                orders?.map((order) => (
                  <>
                    <OrderItem key={order._id} order={order} />
                  </>
                ))
              }
            </div>
          </BorderedCard>
      }
    </>
  );
};

export default OrderListCard;