import React from "react";
import { Order } from "../types/order";
import styles from "../styles/order.module.scss";
import { Card } from "./card";
import store from "../public/images/store.png";
import Image from "next/image";
import bin from "../public/images/bin.png";
import OrderService from "../service/order.service";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";


type CartItemProps = {
    order: Order;
    userId?: string;
}

const CartItemContainer: React.FC<CartItemProps> = ({ order, userId }) => {
    const CART_URL = process.env.NEXT_PUBLIC_ORDER_URL;
    const orderService = new OrderService();
    const { mutate } = useSWRConfig();
    const router = useRouter();

    const increaseQuantity = async (orderId: string, productSku: string) => {
        await orderService.updateQuantity(`${CART_URL}/cartItems/increase/${orderId}/sku/${productSku}`);
        mutate(`${CART_URL}/carts/${userId}`).then();
    };

    const decreaseQuantity = async (orderId: string, productSku: string) => {
        await orderService.updateQuantity(`${CART_URL}/cartItems/decrease/${orderId}/sku/${productSku}`);
        mutate(`${CART_URL}/carts/${userId}`).then();
    };

    const deleteItemFromCart = async (orderId: string, productSku: string) => {
        await orderService.deleteItemFromCart(`${CART_URL}/cartItems/${orderId}/sku/${productSku}`);
        mutate(`${CART_URL}/carts/${userId}`).then();
    };

    return (
        <Card>
            <div className={styles.orderContainer}>
                <Image src={store} alt={"store-image"} height={30} width={30} />
                <h3>{order.location.name}</h3>
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
                                       style={{ borderRadius: "5px" }} />
                            </div>
                            <div>
                                <h3>{cartItem.product}</h3>
                                <p>{cartItem.price} FCFA</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.counter}>
                                        <span onClick={async (event) => {
                                            event.stopPropagation();
                                            if (cartItem.quantity > 1) {
                                                await decreaseQuantity(order.id, cartItem.productSku);
                                            } else {
                                                await deleteItemFromCart(order.id, cartItem.productSku);
                                            }
                                        }}>-</span>
                                        <p>{cartItem.quantity}</p>
                                        <span onClick={(event) => {
                                            event.stopPropagation();
                                            increaseQuantity(order.id, cartItem.productSku).then();
                                        }}>+</span>
                                    </div>
                                    <div onClick={(event) => {
                                        event.stopPropagation();
                                        deleteItemFromCart(order.id, cartItem.productSku).then();
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
            <div style={{ height: "20px" }}></div>
            <hr />
            <div className={styles.itemButtonContainer}>
                <p><b>Quantite: </b>{order.totalQuantity} </p>
                <p><b>Prix:</b> {order.totalPrice} FCFA</p>
            </div>
        </Card>
    );
};

export default CartItemContainer;