import React from "react";
import styles from "../styles/spinner.module.scss";

const Spinner = () => {
    return (
        <>
            <div className={styles.spinner}>
                <svg className={styles.spinnerCircle}></svg>
            </div>
        </>
    );
}

export default Spinner;