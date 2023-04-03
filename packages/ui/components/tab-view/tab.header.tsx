import * as React from "react";
import styles from "./tab.module.scss"; 

type Props = {
    children: Array<React.ReactNode>; 
    style?: React.CSSProperties;
    className?: string; 
}

const TabHeader:React.FC<Props> = ({style,  children, }) =>   {
    return (
        <div style={style} className={styles.tabHeader} >
            {children}
        </div>
    )
}

export default TabHeader