import { NextPage } from "next";
import NestedLayout from "../../components/nested-layout/nested.layout";
import InsideHeader from "../../components/inside-header/inside.header";
import styles from "./order.module.scss";
import { Avatar, BorderedCard, Row } from "ui";
import { useRouter } from "next/router";
import { useOrder } from "../../hooks/order.hooks";
import Image from "next/image";
import OrderService from "../../service/order.service";
import { useSWRConfig } from "swr";


type Props = {
    orderStatus: string
}



const OrderDetail: NextPage = () => {
    const router = useRouter();
    const { uid } = router.query;
    const OrderUrl = process.env.NEXT_PUBLIC_ORDER_URL;
    const { order, isLoading, error } = useOrder(`${OrderUrl}/${uid}`);
    const orderService = new OrderService();
    const { mutate } = useSWRConfig();

    if (isLoading) return (
        <div>
            ...Loading
        </div>
    );

    if (error) return (
        <NestedLayout>
            {error.message}
        </NestedLayout>
    )

    const updateStatus = async (id: string) => {
        const response = await orderService.updateStatus(`${OrderUrl}/status/${id}`);
        mutate(`${OrderUrl}/${uid}`);
        if (response.status !== 200) {
            return;
        }
    }




    return (
        <NestedLayout>
            <InsideHeader />
            <div style={{ height: "1rem" }}></div>
            <Row>
                <div className={styles.mainCol}>
                    <BorderedCard style={{ padding: "1rem" }}>
                        <h3>Liste des produits</h3>
                        <hr />
                        <table className={styles.productTable} style={{ width: "100%" }}>
                            <tbody>
                                <th>Produit</th>
                                <th>Quantite</th>
                                <th>Prix</th>
                                <th>Prix Total</th>
                            </tbody>
                            {
                                order?.cartItems.map((item) => (
                                    <tr className={styles.cartItem} key={item.productSku}>
                                        <td style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                            <Avatar style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "0.3rem"
                                            }}>
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={"product-image"}
                                                    fill
                                                    style={{ objectFit: "cover" }} />
                                            </Avatar>
                                            <p className={styles.ellipsis}>{item.product}</p>
                                        </td>
                                        <td>
                                            <p>X{item.quantity}</p>
                                        </td>
                                        <td>
                                            <p>{item.initialPrice}XAF</p>
                                        </td>
                                        <td>
                                            <p>{item.price}XAF</p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    </BorderedCard>
                    <BorderedCard style={{ padding: "1rem" }}>
                        <h3>Details du client</h3>
                        <hr />
                        <div className={styles.verticalInfo}>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Nom:</b>
                                <p>{order?.userInformation.lastName}</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Prenom:</b>
                                <p>{order?.userInformation.firstName}</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Numero de telephone:</b>
                                <p>+237 {order?.userInformation.phoneNumber}</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>E-mail</b>
                                <p>{order?.userInformation.email}</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Methode de paiement:</b>
                                <p>{order?.payMentMode}</p>
                            </div>
                        </div>
                    </BorderedCard>
                </div>
                <div className={styles.rightCol}>
                    <BorderedCard style={{ padding: "1rem" }}>
                        <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                            <h3>Resume de la Commande</h3>
                            <button onClick={() => updateStatus(order?._id!)} type="button" className={styles.statusButton}>
                                {order?.status}
                            </button>
                        </div>
                        <hr />
                        <div className={styles.verticalInfo}>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Creation:</b>
                                <p>{new Date(order?.createdAt!).toLocaleDateString()}</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Heure:</b>
                                <p>{new Date(order?.createdAt!).toLocaleTimeString()}</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Total:</b>
                                <p>{order?.totalPrice} XAF</p>
                            </div>
                            <div style={{ justifyContent: "space-between" }} className={styles.addressFlex}>
                                <b>Prix de Livraison:</b>
                                <p>0.0 XAF</p>
                            </div>
                        </div>
                    </BorderedCard>
                    <BorderedCard
                        style={{
                            padding: "1rem",
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                        <h3>Total: </h3>
                        <p>{order?.totalPrice} XAF</p>
                    </BorderedCard>
                    <BorderedCard
                        style={{
                            padding: "1rem",
                        }}>
                        <h3>Adresse de Livraison</h3>
                        <hr />
                        <div className={styles.verticalInfo}>
                            <div className={styles.addressFlex}>
                                <b>Ligne d'adresse</b>
                                <p>{order?.userInformation.streetName + ", " + order?.userInformation.city}</p>
                            </div>
                            <div className={styles.addressFlex}>
                                <b>Rue</b>
                                <p>{order?.userInformation.streetName}</p>
                            </div>
                            <div className={styles.addressFlex}>
                                <b>Ville</b>
                                <p>{order?.userInformation.city}</p>
                            </div>
                            <div>
                                {
                                    order?.userInformation.poBox ?
                                        <div className={styles.addressFlex}>
                                            <b>Boite Postale</b>
                                            <p>{order?.userInformation.poBox}</p>
                                        </div> :
                                        <div></div>
                                }
                            </div>
                        </div>
                    </BorderedCard>
                </div>
            </Row>
        </NestedLayout>
    );
};

export default OrderDetail;