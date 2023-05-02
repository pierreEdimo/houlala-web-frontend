import styles from "./validate.button.module.scss";
import * as React from "react";
import { MouseEventHandler } from "react";

type Props = {
    children: React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: string
}

const SubmitButton: React.FC<Props> = ({ children, onClick}) => {
    return (
        <button onClick={onClick} type={"submit"} className={styles.validateButton}>
            {children}
        </button>
    );
};

export default SubmitButton;