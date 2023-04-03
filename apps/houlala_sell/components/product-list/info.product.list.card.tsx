import React from "react";
import { useProductList } from "../../hooks/product.hooks";
import { BorderedCard } from "ui";
import style from "./product.list.module.scss";
import ProductItem from "../product-item/product.item";

type Props = {
    url: string,
    title: string
}

const InfoProductListCard: React.FC<Props> = ({ url, title }) => {
    const { products, error, isLoading } = useProductList(url);

    if (isLoading) {
        return (
            <div>
                ...Loading
            </div>
        );
    }

    if (error) {
        return (
            <div>
                ...Error
            </div>
        );
    }

    return (
        <>
            {
                products?.length! < 1 ?
                    <div></div> :
                    <BorderedCard style={{ padding: "1rem" }}>
                        <div className={style.cardHeader}>
                            <h3>{title}</h3>
                        </div>
                        <br />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem"
                        }}>
                            {
                                products?.map((product) => (
                                    <ProductItem key={product._id} product={product} />
                                ))
                            }
                        </div>
                    </BorderedCard>
            }
        </>
    );
};

export default InfoProductListCard;