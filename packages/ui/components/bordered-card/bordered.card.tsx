import react, { CSSProperties } from "react";
import styles from "./bordered.card.module.scss";

type Props = {
  children: react.ReactNode,
  style?: CSSProperties,
}


const BorderedCard: react.FC<Props> = ({ children, style }) => {
  return (
    <>
      <div style={style} className={styles.card}>
        {children}
      </div>
    </>
  );
};

export default BorderedCard;