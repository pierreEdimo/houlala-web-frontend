import styles from "../styles/tab.view.module.scss";
import React from "react";

type TabProps = {
    children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({children}) => {
    return (
        <>
            <div className={styles.tab}>
                {children}
            </div>
        </>
    )
}

export default Tab;