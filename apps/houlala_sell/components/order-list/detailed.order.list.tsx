import { useOrderList } from "../../hooks/order.hooks";
import styles from "./order.list.card.module.scss";
import * as React from "react";
import Image from "next/image";
import noOrders from "../../public/images/no-trolley.png";
import DetailedOrderItem from "../order-item/detailed.order.item"; 

type Props = {
    url: string;
}

const DetailedOrderList: React.FC<Props> = ({ url }) => {
    const { orders, isLoading, error } = useOrderList(url);

    if (isLoading) return (<div>...Loading</div>);

    return (
        <div>
            {
                orders?.length! < 1 ?
                    <div className={styles.noOrder}>
                        <Image src={noOrders} alt={'no order image'} width={80} height={80} />
                        Pas de Commandes
                    </div> :
                    <div>
                        {
                            orders?.map((order) => (
                                <DetailedOrderItem key={order._id} order={order}/>
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default DetailedOrderList; 