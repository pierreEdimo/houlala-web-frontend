import React from "react";
import styles from "../styles/card.module.scss";

type CardProps = {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({children}) => {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}