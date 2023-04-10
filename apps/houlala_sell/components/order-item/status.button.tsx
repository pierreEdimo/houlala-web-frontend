import React from "react";
import styles from "./order.item.module.scss";

type Props = {
  status: string;
}


const StatusButton: React.FC<Props> = ({ status }) => {
  switch (status) {
    case "Delivre":
      return (
        <button style={{background:"#dfd"}} className={styles.statusButton}>
          <p>Delivre</p>
        </button>
      );
    case "Route":
      return (
        <button className={styles.statusButton}>
          <p>Route</p>
        </button>
      );
    case "Annulle":
      return (
        <button>
          <p>Annulle</p>
        </button>
      );
    case "Traitement":
      return (
        <button className={styles.statusButton}>
          <p>Traitement</p>
        </button>
      );
    case "Attente":
    default:
      return (
        <button style={{ background: "#fff" }} className={styles.statusButton}>
          <p>Attente</p>
        </button>
      );
  }
};

export default StatusButton;