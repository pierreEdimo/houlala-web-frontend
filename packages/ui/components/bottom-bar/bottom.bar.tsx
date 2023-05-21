import styles from "./bottom.bar.module.scss";
import * as React from "react";
import HoulalaCard from "../houlala-card/houlala.card";

type Props = {
    children: React.ReactNode[]
}

const BottomBar: React.FC<Props> = ({ children }) => {
    return <div className={styles.bottomBar}>
        <div className={styles.bottomBarContent}>
            {children}
        </div>
    </div>;
};

export default BottomBar;