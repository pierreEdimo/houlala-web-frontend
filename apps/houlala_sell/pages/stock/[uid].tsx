import { NextPage } from "next";
import { HoulalaCard, Container, Row } from "ui";
import style from "../../styles/Home.module.scss";
import ProductListCard from "../../components/product-list/product.list.card";
import { useRouter } from "next/router";
import NestedLayout from "../../components/nested-layout/nested.layout";
import { useRecoilState } from "recoil";
import AuthState from "../../state/auth.state";
import { useEffect } from "react";

const Stock: NextPage = () => {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const router = useRouter();
    const { uid } = router.query;
    const [isLoggedIn] = useRecoilState(AuthState);

    useEffect(() => {
    });

    return (
        <NestedLayout>
            <Container>
                <h2>Stock</h2>
                <br />
            </Container>
            <div className={style.mainContainer}>
                <ProductListCard
                    title={"Produits"}
                    url={`${PRODUCT_URL}/location/${uid}?limit=0`} />
            </div>
        </NestedLayout>
    );
};

export default Stock;