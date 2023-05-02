import * as React from "react";
import { MouseEventHandler } from "react";
import styles from "./filled.button.module.scss";

type Props = {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
}

const HoulalaFilledButton: React.FC<Props> = ({ children, onClick, style }) => {
    return (
        <button type={"button"} className={styles.filledButton} style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default HoulalaFilledButton; 