import * as React from "react";
import { Order } from "../../types/order";
import styles from "./order.item.module.scss";
import IconImage from "../icon-image/icon.image";
import successOrder from "../../public/images/sucess_order.png";
import calendar from "../../public/images/calendar.png";
import StatusButton from "./status.button";
import moneyBag from "../../public/images/money-bag.png";
import cash from "../../public/images/cash.png";
import boxes from "../../public/images/boxes.png";

type Props = {
    order: Order;
}

const DetailedOrderItem: React.FC<Props> = ({ order }) => {
    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderContainerItem}>
                <IconImage icon={successOrder} width={15} height={15} />
                <p id={styles.nameId}>{order.userInformation.lastName} {order.userInformation.firstName}</p>
            </div>
            <div className={styles.orderContainerItem}>
                <IconImage icon={calendar} width={15} height={15} />
                <p>{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <div className={styles.orderContainerItem}>
                <StatusButton status={order.status} />
            </div>
            <div id={styles.priceContainer} className={styles.orderContainerItem}>
                <IconImage icon={moneyBag} width={15} height={15} />
                <p>{order.totalPrice} XAF</p>
            </div>
            <div id={styles.priceContainer} className={styles.orderContainerItem}>
                <IconImage icon={boxes} width={15} height={15} />
                <p>{order.totalQuantity}</p>
            </div>
            <div id={styles.priceContainer} className={styles.orderContainerItem}>
                <IconImage icon={cash} width={15} height={15} />
                <p>{order.payMentMode}</p>
            </div>
        </div>
    );
};

export default DetailedOrderItem; 