import React from "react";
import styles from "../styles/tab.view.module.scss";
import {useRecoilState} from "recoil";
import {TabState} from "../state/tabs.atoms";


type TabHeaderProps = {
    children: Array<React.ReactNode>
}

const TabHeader: React.FC<TabHeaderProps> = ({children}) => {
    const [isActive, setActive] = useRecoilState(TabState);

    const changeTabs = (index: number) => {
        setActive(index);
    }

    return (
        <>
            <div className={styles.tabHeader}>
                {
                    children.map((child, index) =>
                        <div className={isActive == index ? styles.active : ""} onClick={() => changeTabs(index)}
                             key={index}>
                            {child}
                        </div>)
                }
            </div>
        </>
    )
}

export default TabHeader;