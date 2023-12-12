import React from "react";
import styles from "../../styles/modal.module.scss";

type EditModalProps = {
    children: React.ReactNode;
    id: string;
}

const EditModalContainer: React.FC<EditModalProps> = ({children, id}) => {

    return (
        <div id={`${id}`} className={styles.modalBody}>
            <div className={styles.modalBodyContentContainer}>
                <div className={styles.modalBodyContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default EditModalContainer