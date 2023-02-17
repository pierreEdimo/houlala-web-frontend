import React from "react";
import styles from "../styles/layout.module.scss"

export function NestedLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            {children}
        </div>
    )
}