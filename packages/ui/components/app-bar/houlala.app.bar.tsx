import styles from "./app.bar.module.scss";
import * as React from "react";

type Props = {
  children: React.ReactNode
}

export const AppBar:React.FC<Props> = ({children}) => {
  return (
    <header className={styles.appBar}>
      {children}
    </header>
  )
}