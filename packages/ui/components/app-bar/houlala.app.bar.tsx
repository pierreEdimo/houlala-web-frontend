import styles from "./app.bar.module.scss";
import * as React from "react";
import { HoulalaCard } from "../../index";

type Props = {
  children: React.ReactNode;
};

const HoulalaAppBar: React.FC<Props> = ({ children }) => {
  return (
    <HoulalaCard style={{ border: "none" }}>
      <header className={styles.appBar}>{children}</header>
    </HoulalaCard>
  );
};

export default HoulalaAppBar;
