import * as React from "react";
import styles from "./tab.module.scss";

type Props = {
    style?: React.CSSProperties;
    children: Array<React.ReactNode>;
    className?: string;
}

const TabView: React.FC<Props> = ({ style, children, className }) => {
    return (
        <div style={style} className={className}>
            <div className={styles.column}>
                <div>{children[0]}</div>
                <br/>
                <div>{children[1]}</div>
            </div>
        </div>
    );
};

export default TabView; 