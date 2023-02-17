import React, { CSSProperties } from "react";
import styles from "./avatar.module.scss";

type Props = {
  children: React.ReactNode,
  style?: CSSProperties
}

const Avatar:React.FC<Props> = ({children, style}) => {
  return (
    <div style={style} className={styles.avatarContainer}>
      {children}
    </div>
  )
}

export default Avatar;