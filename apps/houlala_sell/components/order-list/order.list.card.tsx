import styles from "./order.list.card.module.scss";
import { HoulalaCard, HoulalaSpinner } from "ui";
import React from "react";
import { useOrderList } from "../../hooks/order.hooks";
import OrderItem from "../order-item/order.item";
import Link from "next/link";

type Props = {
  url: string;
  title?: string;
  locationId?: string;
  position?: string;
};

const OrderListCard: React.FC<Props> = ({
  url,
  title,
  locationId,
  position,
}) => {
  const { orders, error, isLoading } = useOrderList(url);

  if (isLoading) {
    return (
      <div>
        <HoulalaSpinner />
      </div>
    );
  }

  if (error) {
    return <div>...Error</div>;
  }

  return (
    <>
      {orders?.length! < 1 ? (
        <div></div>
      ) : (
        <HoulalaCard style={{ padding: "1rem", marginBottom: "1rem" }}>
          <div className={styles.cardHeader}>
            <h3>{title}</h3>
            {position === "home" ? (
              <Link href={`/orders/${locationId}`}>Voir tout</Link>
            ) : (
              <div></div>
            )}
          </div>
          <br />
          <table style={{ width: "100%" }}>
            {orders?.map((order) => (
              <>
                <OrderItem key={order._id} order={order} />
              </>
            ))}
          </table>
        </HoulalaCard>
      )}
    </>
  );
};

export default OrderListCard;
