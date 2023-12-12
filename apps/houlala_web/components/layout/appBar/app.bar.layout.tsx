import React from "react";
import styles from "./layout.module.scss";

type AppBarLayoutProps = {
    children: React.ReactNode;
}

const AppBarLayout: React.FC<AppBarLayoutProps> = ({children}) => {
    return (
        <div className={styles.appBarLayout}>
            {children}
        </div>
    )
}

export default AppBarLayout;