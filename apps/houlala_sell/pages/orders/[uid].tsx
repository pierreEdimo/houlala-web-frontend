import { NextPage } from "next";
import { useRouter } from "next/router";
import { BorderedCard, Container, Row } from "ui";
import style from "./orders.module.scss";
import OrderListCard from "../../components/order-list/order.list.card";
import { useRecoilState } from "recoil";
import StatusState from "../../state/status.state";
import { useOrderList } from "../../hooks/order.hooks";
import OrderItem from "../../components/order-item/order.item";
import noOrder from "../../public/images/no-trolley.png";
import IconImage from "../../components/icon-image/icon.image";

const Orders: NextPage = () => {
  const router = useRouter();
  const { uid } = router.query;
  const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;
  const [status, setStatus] = useRecoilState(StatusState);

  function showValue() {
    console.log(status);
  }

  const { orders, error, isLoading } = useOrderList(`${ORDER_URL}/location/${uid}/status/${status}`);

  if (error) {
    return (
      <div>
        ...Error
      </div>
    );
  }


  return (
    <Container>
      <h2 style={{ margin: "none" }}>Commandes</h2>
      <br />
      <div className={style.selectWrapper}>
        <select value={status} onChange={(e) => {
          setStatus(e.target.value);
          showValue();
        }} className={style.selection}>
          <option value={"all"}>toutes</option>
          <option value={"Attente"}>Attente</option>
          <option value={"Traitement"}>Traitement</option>
          <option value={"Route"}>Route</option>
          <option value={"Delivre"}>Delivre</option>
          <option value={"Annule"}>Annulle</option>
        </select>
      </div>
      <br />
      <Row>
        <div className={style.colLeft}>
          {
            status === "all" ?
              <OrderListCard url={`${ORDER_URL}/${status}/${uid}`}
                             title={"Mes Commandes"} /> :
              <div>
                <BorderedCard style={{ padding: "1rem" }}>
                  {
                    isLoading ?
                      <div>
                        ...Loading
                      </div> :
                      <>
                        <div className={style.cardHeader}>
                          <h3>{status}</h3>
                        </div>
                        <br />
                        <div>{
                          orders?.length! < 1 ?
                            <div className={style.noOrder}>
                              <IconImage icon={noOrder} width={80} height={80} />
                              <p>Vous n'avez aucunes commandes en {status}</p>
                            </div> :
                            <div className={style.orderContainer}>
                              {
                                orders?.map((order) => (
                                  <OrderItem key={order._id} order={order} />
                                ))
                              }
                            </div>
                        }</div>
                      </>
                  }
                </BorderedCard>
              </div>
          }
        </div>
        <div className={style.colRight}>
          <BorderedCard style={{ padding: "1rem" }}>
            <div className={style.cardHeader}>
              <h3>Appercu des commandes</h3>
            </div>
          </BorderedCard>
        </div>
      </Row>
    </Container>
  );
};

export default Orders;