import styles from "../styles/button.module.scss";
import React from "react";
import { SubmitButton } from "ui";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    backgroundColor?: string;
    border?: string;
}

const ValidateButton: React.FC<ButtonProps> = ({title, onClick, backgroundColor, border}) => {
    return (
        <SubmitButton onClick={onClick}>
            {title}
        </SubmitButton>
    )
}

export default ValidateButton;