import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Container,
  TabView,
  TabHeader,
  TabBody,
  TabItem,
  HoulalaCard,
} from "ui";
import { useRecoilState } from "recoil";
import NestedLayout from "../../components/nested-layout/nested.layout";
import "../../styles/Home.module.scss";
import { IndexState } from "../../state/index.state";
import styles from "./orders.module.scss";
import DetailedOrderList from "../../components/order-list/detailed.order.list";
import { OrderEnum } from "../../types/order.status";

const Orders: NextPage = () => {
  const router = useRouter();
  const { uid } = router.query;
  const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;
  const [currentIndex, setIndex] = useRecoilState(IndexState);
  const menusItems = [
    "Toutes",
    "En Attente",
    "En Traitement",
    "En Route",
    "Delivre",
    "Annule",
  ];

  return (
    <NestedLayout>
      <Container>
        <h2 style={{ margin: "none" }}>Commandes</h2>
        <div className={"mainContainer"}>
          <div>
            <TabView>
              <TabHeader style={{ borderBottom: "1px solid #d3d3d3" }}>
                {menusItems.map((item, index) => (
                  <TabItem
                    className={styles.customItem}
                    style={{
                      borderBottom:
                        currentIndex === index ? "2px solid orange" : "",
                    }}
                    key={index}
                  >
                    <div onClick={() => setIndex(index)}>
                      <p
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  </TabItem>
                ))}
              </TabHeader>
              <TabBody currentIndex={currentIndex}>
                <TabItem>
                  <HoulalaCard style={{ padding: "1rem" }}>
                    <DetailedOrderList
                      url={`${ORDER_URL}/location/filter?locationId=${uid}`}
                    />
                  </HoulalaCard>
                </TabItem>
                <TabItem>
                  <HoulalaCard style={{ padding: "1rem" }}>
                    <DetailedOrderList
                      url={`${ORDER_URL}/location/filter?locationId=${uid}&status=${OrderEnum.attente}`}
                    />
                  </HoulalaCard>
                </TabItem>
                <TabItem>
                  <HoulalaCard style={{ padding: "1rem" }}>
                    <DetailedOrderList
                      url={`${ORDER_URL}/location/filter?locationId=${uid}&status=${OrderEnum.traitement}`}
                    />
                  </HoulalaCard>
                </TabItem>
                <TabItem>
                  <HoulalaCard style={{ padding: "1rem" }}>
                    <DetailedOrderList
                      url={`${ORDER_URL}/location/filter?locationId=${uid}&status=${OrderEnum.route}`}
                    />
                  </HoulalaCard>NestedLayout
                </TabItem>
                <TabItem>
                  <HoulalaCard style={{ padding: "1rem" }}>
                    <DetailedOrderList
                      url={`${ORDER_URL}/location/filter?locationId=${uid}&status=${OrderEnum.delivre}`}
                    />
                  </HoulalaCard>
                </TabItem>
                <TabItem>
                  <HoulalaCard style={{ padding: "1rem" }}>
                    <DetailedOrderList
                      url={`${ORDER_URL}/location/filter?locationId=${uid}&status=${OrderEnum.annule}`}
                    />
                  </HoulalaCard>
                </TabItem>
              </TabBody>
            </TabView>
          </div>
        </div>
      </Container>
    </NestedLayout>
  );
};

export default Orders;
