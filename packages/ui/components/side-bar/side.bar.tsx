import React from "react";
import styles from "./side.bar.module.scss";

type Props = {
  children: React.ReactNode,
  style?: React.CSSProperties
}

const SideBar:React.FC<Props> = ({children, style}) => {
  return (
    <>
      <div style={style} className={styles.sidebar}>
        {children}
      </div>
    </>
  )
}

export default SideBar;