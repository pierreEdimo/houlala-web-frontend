import styles from "./layout.module.scss";
import * as React from "react";

type Props = {
  children: React.ReactNode;
}

const HoulalaDefaultLayout: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

export default HoulalaDefaultLayout;