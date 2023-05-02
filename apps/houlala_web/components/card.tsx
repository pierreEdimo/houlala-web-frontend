import React from "react";
import { BorderedCard } from "ui";

type CardProps = {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <BorderedCard style={{padding: "1rem"}}>
            {children}
        </BorderedCard>
    );
};