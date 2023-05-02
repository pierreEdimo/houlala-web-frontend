import * as React from "react";
import styles from "./thumbnail.module.scss";

type Props = {
  children: React.ReactNode;
}
const HoulalaThumbnail: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.thumbNail}>
        {children}
      </div>
    </>
  );
};

export default  HoulalaThumbnail;