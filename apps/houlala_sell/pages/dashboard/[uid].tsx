import styles from "../../styles/Home.module.scss";
import { BorderedCard, Container, Row } from "ui";
import { useLocation } from "../../hooks/location.hooks";
import products from "../../public/images/box.png";
import Image from "next/image";
import checklst from "../../public/images/checklist.png";
import checkout from "../../public/images/check-out.png";
import cancel from "../../public/images/cancel.png";
import OrderListCard from "../../components/order-list/order.list.card";
import ProductListCard from "../../components/product-list/product.list.card";
import NestedLayout from "../../components/nested-layout/nested.layout";
import InfoProductListCard from "../../components/product-list/info.product.list.card";
import { useRecoilState } from "recoil";
import { UserIdState } from "../../state/user.id.state";


const Dashboard = () => {
    const [userId, setUserId] = useRecoilState(UserIdState);
    const {
        location,
        error,
        isLoading
    } = useLocation(`${process.env.NEXT_PUBLIC_LOCATION_URL}/users/${userId}`);
    const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    if (isLoading) {
        return (
            <div>
                ....Loading
            </div>
        );
    }

    if (error) {
        return (
            <div>
                ...Errors
            </div>
        );
    }

    return (
        <NestedLayout>
            <div className={styles.container}>
                <Container>
                    <h2>Dashboard</h2>
                    <br />
                    <div className={styles.cardContainer}>
                        <BorderedCard>
                            <div className={styles.boxContainer}>
                                <div style={{ padding: "1rem" }}>
                                    <h4> Produits</h4>
                                    <p>{location?.productTotalCount}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                                    <div></div>
                                    <Image src={products}
                                        style={{ float: "right" }}
                                        alt={"product-image"}
                                        width={35}
                                        height={35} />
                                </div>
                            </div>
                        </BorderedCard>
                        <BorderedCard>
                            <div className={styles.boxContainer}>
                                <div style={{ padding: "1rem" }}>
                                    <h4>Commandes</h4>
                                    <p>{location?.orderTotalCount}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                                    <div></div>
                                    <Image src={checklst}
                                        style={{ float: "right" }}
                                        alt={"product-image"}
                                        width={35}
                                        height={35} />
                                </div>
                            </div>
                        </BorderedCard>
                        <BorderedCard>
                            <div className={styles.boxContainer}>
                                <div style={{ padding: "1rem" }}>
                                    <h4>Ventes</h4>
                                    <p>{location?.orderSoldCount}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                                    <div></div>
                                    <Image src={checkout}
                                        style={{ float: "right" }}
                                        alt={"product-image"}
                                        width={35}
                                        height={35} />
                                </div>
                            </div>
                        </BorderedCard>
                        <BorderedCard>
                            <div className={styles.boxContainer}>
                                <div style={{ padding: "1rem" }}>
                                    <h4>Annulations</h4>
                                    <p>{location?.orderCanceledCount}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                                    <div></div>
                                    <Image src={cancel}
                                        style={{ float: "right" }}
                                        alt={"product-image"}
                                        width={35}
                                        height={35} />
                                </div>
                            </div>
                        </BorderedCard>
                    </div>
                    <br />
                    <Row>
                        <div className={styles.leftCol}>
                            <OrderListCard
                                url={`${ORDER_URL}/location/${location?.uniqueIdentifier}`}
                                title={"Les commandes du jour"}
                                position={"home"}
                                locationId={`${location?.uniqueIdentifier}`}
                            />
                            <ProductListCard title={"Appercu des produits"}
                                url={`${PRODUCT_URL}/location/${location?.uniqueIdentifier}?limit=25`}
                                locationId={location?.uniqueIdentifier}
                                position={"home"}
                            />
                            <br />
                            <OrderListCard
                                url={`${ORDER_URL}/location/filter?locationId=${location?.uniqueIdentifier}`}
                                title={"Commandes recentes"}
                                position={"home"}
                                locationId={`${location?.uniqueIdentifier}`}
                            />
                        </div>
                        <div className={styles.rightCol}>
                            <InfoProductListCard
                                url={`${PRODUCT_URL}/top/${location?.uniqueIdentifier}`}
                                title={"Top Produits"} />
                            <br />
                            <InfoProductListCard
                                url={`${PRODUCT_URL}/stock/${location?.uniqueIdentifier}`}
                                title={"Bientot en rupture de stock"} />
                        </div>
                    </Row>
                </Container>
            </div>
        </NestedLayout>
    );
}

export default Dashboard; 