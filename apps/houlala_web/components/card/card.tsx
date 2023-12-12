import React from "react";
import { HoulalaCard } from "ui";

type CardProps = {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <HoulalaCard style={{padding: "1rem", background: "white"}}>
            {children}
        </HoulalaCard>
    );
};