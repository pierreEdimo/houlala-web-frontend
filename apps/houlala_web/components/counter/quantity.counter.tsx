import styles from "./quantity.module.scss";
import React from "react";

type QuantityCounterProps = {
    quantity: number;
    increase?: () => void;
    decrease?: () => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({quantity, increase, decrease}) => {
    return (
        <div className={styles.productCount}>
            <span onClick={decrease}>-</span>
            <p>{quantity}</p>
            <span onClick={increase}>+</span>
        </div>
    )
}

export default QuantityCounter;