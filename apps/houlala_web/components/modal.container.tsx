import React, {useEffect} from "react";
import styles from "../styles/modal.module.scss";

type ModalContainerProps = {
    children?: React.ReactNode;
}


const ModalContainer: React.FC<ModalContainerProps> = ({children}) => {
    useEffect(() => {
       
    })

    return (
        <div className={styles.modalBody} id={"modal"}>
            <div className={styles.modalBodyContentContainer}>
                <div className={styles.modalBodyContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalContainer;