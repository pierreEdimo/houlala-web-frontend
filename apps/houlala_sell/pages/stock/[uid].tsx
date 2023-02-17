import { NextPage } from "next";
import { BorderedCard, Container, Row } from "ui";
import style from "../../styles/Home.module.scss";
import ProductListCard from "../../components/product-list/product.list.card";
import { useRouter } from "next/router";

const Stock: NextPage = () => {
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
  const router = useRouter();
  const {uid} = router.query;
  return (
    <>
      <Container>
        <h2>Stock</h2>
        <br />
      </Container>
      <Row>
        <div className={style.leftCol}>
          <ProductListCard
            title={"Produits"}
            url={`${PRODUCT_URL}/location/${uid}?limit=0`} />
        </div>
        <div className={style.rightCol}>
          <BorderedCard style={{ padding: "1rem" }}>
            <div className={style.cardHeader}>
              <h3>Appercu</h3>
            </div>
          </BorderedCard>
        </div>
      </Row>
    </>
  );
};

export default Stock;