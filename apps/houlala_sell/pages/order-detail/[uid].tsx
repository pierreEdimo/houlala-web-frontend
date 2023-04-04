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

    if (error) return (
        <NestedLayout>
            {error.message}
        </NestedLayout>
    )

    return (
        <NestedLayout>
            <InsideHeader />
            <div style={{ height: "1rem" }}></div>
            <p>{order?.userInformation.firstName}</p>
        </NestedLayout>
    );
};

export default OrderDetail;