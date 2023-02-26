import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { BorderedCard, Container, Row } from "ui";
import { useLocation } from "../hooks/location.hooks";
import products from "../public/images/box.png";
import Image from "next/image";
import checklst from "../public/images/checklist.png";
import checkout from "../public/images/check-out.png";
import cancel from "../public/images/cancel.png";
import OrderListCard from "../components/order-list/order.list.card";
import ProductListCard from "../components/product-list/product.list.card";
import TopProductListCard from "../components/product-list/top.product.list.card";
import UnavailableProductListCard from "../components/product-list/unavailable.product.list.card";
import RevenueChart from "../components/charts/revenue.chart";

const Home: NextPage = () => {
  const {
    location,
    error,
    isLoading
  } = useLocation(`${process.env.NEXT_PUBLIC_LOCATION_URL}/users/27d54546-5c23-40b3-be65-6701f89e4d9b`);
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
    <div className={styles.container}>
      <Container>
        <h2>Dashboard</h2>
        <br />
        <BorderedCard>
          <div className={styles.cardContainer}>
            <div className={styles.boxContainer}>
              <Image src={products}
                     alt={"product-image"}
                     width={50}
                     height={50} />

              <div>
                <h4>Total des produits</h4>
                <p>{location?.productTotalCount}</p>
              </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.boxContainer}>
              <Image src={checklst}
                     alt={"product-image"}
                     width={50}
                     height={50} />

              <div>
                <h4> Total des Commandes recues</h4>
                <p>{location?.orderTotalCount}</p>
              </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.boxContainer}>
              <Image src={checkout}
                     alt={"product-image"}
                     width={50}
                     height={50} />
              <div>
                <h4> Total des ventes realisees</h4>
                <p>{location?.orderSoldCount}</p>
              </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.boxContainer}>
              <Image src={cancel}
                     alt={"product-image"}
                     width={50}
                     height={50} />

              <br />
              <div>
                <h4>Commandes annulees</h4>
                <p>{location?.orderCanceledCount}</p>
              </div>
            </div>
          </div>
        </BorderedCard>
        <br />
        <Row>
          <div className={styles.leftCol}>
            <OrderListCard
              url={`${ORDER_URL}/location/${location?.uniqueIdentifier}`}
              title={"Les commandes du jour"}
              position={"home"}
              locationId={`${location?.uniqueIdentifier}`}
            />
            <BorderedCard style={{ padding: "1rem" }}>
              <div className={styles.cardHeader}>
                <h3>Revenues vs commandes</h3>
              </div>
              <RevenueChart/>
            </BorderedCard>
            <ProductListCard title={"Appercu des produits"}
                             url={`${PRODUCT_URL}/random/location/${location?.uniqueIdentifier}?size=25`}
                             locationId={location?.uniqueIdentifier}
                             position={"home"}
            />
            <OrderListCard
              url={`${ORDER_URL}/all/${location?.uniqueIdentifier}`}
              title={"Commandes recentes"}
              position={"home"}
              locationId={`${location?.uniqueIdentifier}`}
            />
          </div>
          <div className={styles.rightCol}>
            <TopProductListCard
              url={`${PRODUCT_URL}`}
              title={"Top Produits"} />
            <br />
            <UnavailableProductListCard url={`${PRODUCT_URL}`}
                                        title={"Bientot en rupture de stock"} />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
