import React from "react";
import styles from "./row.module.scss";

type Props = {
  children: React.ReactNode
}

const Row: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.row}>
        {children}
      </div>
    </>
  );
};

export default Row;