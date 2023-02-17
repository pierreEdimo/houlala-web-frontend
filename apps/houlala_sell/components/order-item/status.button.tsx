import React from "react";
import statusImage from "../../public/images/status.png";
import IconImage from "../icon-image/icon.image";
import styles from "./order.item.module.scss";
import successfullOrder from "../../public/images/successful_box.png";
import road from "../../public/images/tracking.png";
import waiting from "../../public/images/file.png";
import canceled from "../../public/images/canceled.png";

type Props = {
  status: string;
}


const StatusButton: React.FC<Props> = ({ status }) => {
  switch (status) {
    case "Delivre":
      return (
        <button style={{background:"#dfd"}} className={styles.statusButton}>
          <IconImage icon={successfullOrder} width={17} height={17} />
          <p>Delivre</p>
        </button>
      );
    case "Route":
      return (
        <button className={styles.statusButton}>
          <IconImage icon={road} width={17} height={17} />
          <p>Route</p>
        </button>
      );
    case "Annulle":
      return (
        <button>
          <IconImage icon={canceled} width={17} height={17} />
          <p>Annulle</p>
        </button>
      );
    case "Traitement":
      return (
        <button>
          <IconImage icon={waiting} width={17} height={17} />
          <p>Traitement</p>
        </button>
      );
    case "Attente":
    default:
      return (
        <button style={{ background: "#fff" }} className={styles.statusButton}>
          <IconImage icon={statusImage} width={17} height={17} />
          <p>Attente</p>
        </button>
      );
  }
};

export default StatusButton;