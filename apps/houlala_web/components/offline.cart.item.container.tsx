import React from "react";
import { OfflineOrder } from "../types/offline.order";
import { Card } from "./card";
import styles from "../styles/order.module.scss";
import Image from "next/image";
import store from "../public/images/store.png";
import bin from "../public/images/bin.png";
import OrderService from "../service/order.service";
import { useRouter } from "next/router";

type Props = {
    order: OfflineOrder
}
const OfflineCartItemContainer: React.FC<Props> = ({ order }) => {
    const orderService = new OrderService();
    const router = useRouter();

    return (
        <Card>
            <div className={styles.orderContainer}>
                <Image src={store} alt={"store-image"} height={30} width={30} />
                <h3>{order.locationName}</h3>
            </div>
            <div style={{ height: "20px" }}></div>
            <hr />
            <div className={styles.itemContainerList}>
                {
                    order.cartItems.map((cartItem) => (
                        <div onClick={() => router.push(`/product/${cartItem.productSku}`)}
                             className={styles.cartItemContainer}
                             key={cartItem.productSku}>
                            <div className={styles.itemImageContainer}>
                                <Image src={cartItem.imageUrl}
                                       alt={"product-image"}
                                       layout={"fill"}
                                       objectFit={"cover"}
                                       style={{ borderRadius: "5px" }}
                                />
                            </div>
                            <div>
                                <h3>{cartItem.product}</h3>
                                <p>{cartItem.price} FCFA</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.counter}>
                                        <span
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                if (cartItem.quantity > 1) {
                                                    orderService.decreaseQuantity(order.locationId, cartItem.productSku).then();
                                                } else {
                                                    orderService.deleteItemFromOrder(order.locationId, cartItem.productSku).then();
                                                }
                                            }}>-</span>
                                        <p>{cartItem.quantity}</p>
                                        <span
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                orderService.increaseQuantity(order.locationId, cartItem.productSku).then();
                                            }}>+</span>
                                    </div>
                                    <div
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            orderService.deleteItemFromOrder(order.locationId, cartItem.productSku).then();
                                        }}
                                        style={{ cursor: "pointer" }}>
                                        <Image src={bin} width={20} height={20} alt={"trash image"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{ height: "1rem" }}></div>
            <hr />
            <div className={styles.itemButtonContainer}>
                <p><b>Quantite: </b>{order.totalQuantity} </p>
                <p><b>Prix:</b> {order.totalPrice} FCFA</p>
            </div>
        </Card>
    );
};

export default OfflineCartItemContainer; 