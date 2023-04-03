import styles from "./modal.module.scss";
import * as React from "react";
import close from "../../public/close.png";
import RoundedButton from "../rounded-button/rounded.button";
import Image from "next/image";

type Props = {
    children: React.ReactNode,
    modalId: string
}

const Modal: React.FC<Props> = ({ children, modalId }) => {

    return (
        <div id={modalId} className={styles.modalContainer}>
            <div className={styles.modalContainerContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal; 