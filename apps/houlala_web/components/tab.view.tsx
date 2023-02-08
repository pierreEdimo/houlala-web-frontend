import styles from "../styles/tab.view.module.scss";
import React from "react";

type TabViewProps = {
    children: Array<React.ReactNode>
}

const TabView: React.FC<TabViewProps> = ({children}) => {
    return (
        <>
            <div className={styles.tabView}>
                {
                    children.map((child) =>
                        <>
                            {child}
                        </>)
                }
            </div>
        </>
    )
}

export default TabView;