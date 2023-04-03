import { NextPage } from "next";
import NestedLayout from "../../components/nested-layout/nested.layout";
import InsideHeader from "../../components/inside-header/inside.header";
import styles from "./order.module.scss";
import { BorderedCard } from "ui";
import { useRouter } from "next/router";
import { useOrder } from "../../hooks/order.hooks";

const OrderDetail: NextPage = () => {
    const router = useRouter();
    const { uid } = router.query;
    const OrderUrl = process.env.NEXT_PUBLIC_ORDER_URL;
    const { order, isLoading, error } = useOrder(`${OrderUrl}/${uid}`);

    if (isLoading) return (
        <div>
            ...Loading
        </div>
    );

    return (
        <NestedLayout>
            <InsideHeader />
            <div style={{ height: "1rem" }}></div>
            <div className={styles.row}>
                <div className={styles.mainCol}>
                    <BorderedCard style={{ borderRadius: "0.3rem" }}>
                        <div className={styles.insideCard}>
                            <h3>Détails du client et de la commande</h3>
                            <hr />
                        </div>
                    </BorderedCard>
                </div>
                <div className={styles.rightCol}></div>
            </div>
        </NestedLayout>
    );
};

export default OrderDetail;