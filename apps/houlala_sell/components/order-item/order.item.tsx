import React from "react";
import { Order } from "../../types/order";
import styles from "./order.item.module.scss";
import successOrder from "../../public/images/sucess_order.png";
import IconImage from "../icon-image/icon.image";
import calendar from "../../public/images/calendar.png";
import moneyBag from "../../public/images/money-bag.png";
import StatusButton from "./status.button";
import { useRouter } from "next/router";

type Props = {
    order: Order
}

const OrderItem: React.FC<Props> = ({ order }) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/order-detail/${order._id}`)} className={styles.orderContainer}>
            <div className={styles.orderContainerItem}>
                <IconImage icon={successOrder} width={15} height={15} />
                <p id={styles.nameId}>{order.userInformation.lastName} {order.userInformation.firstName} </p>
            </div>
            <div className={styles.orderContainerItem} >
                <IconImage icon={calendar} width={15} height={15} />
                <p>{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <div className={styles.orderContainerItem}>
                <StatusButton status={order.status} />
            </div>
            <div id={styles.priceContainer} className={styles.orderContainerItem}>
                <IconImage icon={moneyBag} width={15} height={15} />
                <p id={styles.nameId}>{order.totalPrice} XAF</p>
            </div
            >
        </div>
    );
};

export default OrderItem;