import styles from "../styles/button.module.scss";
import React from "react";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    backgroundColor?: string;
    border?: string;
}

const ValidateButton: React.FC<ButtonProps> = ({title, onClick, backgroundColor, border}) => {
    return (
        <button style={{backgroundColor: `${backgroundColor}`, border:`${border}`}} onClick={onClick} className={styles.buttonContainer}>
            {title}
        </button>
    )
}

export default ValidateButton;