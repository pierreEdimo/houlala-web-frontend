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
import { useRouter } from "next/router";

type Props = {
    order: Order;
}

const DetailedOrderItem: React.FC<Props> = ({ order }) => {
    const router = useRouter();

    return (
        <tr onClick={() => router.push(`/order-detail/${order._id}`)} className={styles.orderContainer}>
            <td style={{display:"flex", gap:"1rem"}} className={styles.orderContainerItem}>
                <IconImage icon={successOrder} width={15} height={15} />
                <p id={styles.nameId}>{order.userInformation.lastName} {order.userInformation.firstName}</p>
            </td>
            <td className={styles.orderContainerItem}>
                <p>{new Date(order.createdAt).toLocaleDateString()}</p>
            </td>
            <td className={styles.orderContainerItem}>
                <p>{order.status}</p>
            </td>
            <td id={styles.priceContainer} className={styles.orderContainerItem}>
                <p>{order.totalPrice} XAF</p>
            </td>
            <td id={styles.priceContainer} className={styles.orderContainerItem}>
                <p>X{order.totalQuantity}</p>
            </td>
            <td id={styles.priceContainer} className={styles.orderContainerItem}>
                <p>{order.payMentMode}</p>
            </td>
        </tr>
    );
};

export default DetailedOrderItem; 