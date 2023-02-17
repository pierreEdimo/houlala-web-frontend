import React from "react";
import { Order } from "../../types/order";
import styles from "./order.item.module.scss";
import successOrder from "../../public/images/sucess_order.png";
import IconImage from "../icon-image/icon.image";
import calendar from "../../public/images/calendar.png";
import moneyBag from "../../public/images/money-bag.png";
import StatusButton from "./status.button";

type Props = {
  order: Order
}

const OrderItem: React.FC<Props> = ({ order }) => {
  return (
    <div className={styles.orderContainer}>
      <div style={{
        width: "270px",
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }}>
        <IconImage icon={successOrder} width={17} height={17} />
        <div>
          <p style={{
            width: "190px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}>{order.userInformation.lastName} {order.userInformation.firstName}
          </p>
        </div>
      </div>
      <div style={{
        width: "90px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <IconImage icon={calendar} width={17} height={17} />
        <p>{new Date(order.createdAt).toLocaleDateString()}</p>
      </div>
      <div style={{
        width: "90px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <StatusButton status={order.status} />
      </div>
      <div style={{
        width: "90px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <IconImage icon={moneyBag} width={17} height={17} />
        <p>{order.totalPrice} FCFA</p>
      </div>
    </div>
  );
};

export default OrderItem;