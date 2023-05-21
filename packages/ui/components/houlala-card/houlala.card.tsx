import react, { CSSProperties } from "react";
import styles from "./houlala.card.module.scss";

type Props = {
  children: react.ReactNode,
  style?: CSSProperties,
}


const HoulalaCard: react.FC<Props> = ({ children, style }) => {
  return (
    <>
      <div style={style} className={styles.card}>
        {children}
      </div>
    </>
  );
};

export default HoulalaCard;