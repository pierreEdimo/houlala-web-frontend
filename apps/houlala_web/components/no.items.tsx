import React from "react";
import styles from "../styles/no.products.module.scss";
import Avatar from "./avatar";
import {StaticImageData} from "next/image";

type NoItemsProps = {
    errorMessage: string;
    iconImage: StaticImageData
}

const NoItems: React.FC<NoItemsProps> = ({errorMessage, iconImage}) => {
    return (
        <>
            <div className={styles.noProductContainer}>
                <div className={styles.iconImage}>
                    <Avatar imageUrl={iconImage} type={"thumbnail"}/>
                </div>
                <div className={styles.errorMessageContainer}>
                    <p className={styles.errorMessage}>{errorMessage}</p>
                </div>
            </div>
        </>
    )

}

export default NoItems;