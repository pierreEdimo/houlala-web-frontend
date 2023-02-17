import { Avatar, SideBar } from "ui";
import Image from "next/image";
import Link from "next/link";
import IconImage from "../icon-image/icon.image";
import dashboard from "../../public/images/dashboard.png";
import order from "../../public/images/clipboard.png";
import boxes from "../../public/images/boxes.png";
import notification from "../../public/images/notification.png";
import settings from "../../public/images/settings.png";
import question from "../../public/images/question.png";
import feedback from "../../public/images/feedback.png";
import archive from "../../public/images/archive.png";
import downArrow from "../../public/images/down-arrow.png";
import styles from "./sidebar.module.scss";
import { LocationModel } from "../../types/locationModel";
import React from "react";

type Props = {
  location: LocationModel
}


const SideBarWrapper: React.FC<Props> = ({ location }) => {
  return (
    <SideBar>
      <div className={styles.sideBarFlex}>
        <div>
          <div className={styles.companyIntro}>
            <Avatar style={{
              width: "50px",
              height: "50px"
            }}>
              <Image fill className={styles.imageContent}
                     src={location.imageUrl}
                     alt={"person-image"} />
            </Avatar>
            <h3 style={{
              fontWeight: "bold",
              width: "80px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}>
              {location.name}
            </h3>
            <Image src={downArrow}
                   width={15}
                   height={15}
                   alt={"icon-image"} />
          </div>
          <div className={styles.verticalFlex}>
            <Link href={"/"}>
              <div className={styles.listTile}>
                <IconImage icon={dashboard}
                           width={20}
                           height={20} />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link href={`/orders/${location.uniqueIdentifier}`}>
              <div className={styles.listTile}>
                <IconImage icon={order}
                           width={20}
                           height={20} />
                <p>Commandes</p>
              </div>
            </Link>
            <Link href={`/stock/${location.uniqueIdentifier}`}>
              <div className={styles.listTile}>
                <IconImage icon={boxes}
                           width={20}
                           height={20} />
                <p>Stock</p>
              </div>
            </Link>
          </div>
          <hr />
          <div className={styles.vertixcalFlex}>
            <Link href={"/notification"}>
              <div className={styles.listTile}>
                <IconImage icon={notification}
                           width={20}
                           height={20} />
                <p>Notifications</p>
              </div>
            </Link>
            <Link href={"/archive"}>
              <div className={styles.listTile}>
                <IconImage icon={archive}
                           width={20}
                           height={20} />
                <p>Archive</p>
              </div>
            </Link>
            <Link href={"/feedback"}>
              <div className={styles.listTile}>
                <IconImage icon={feedback}
                           width={20}
                           height={20} />
                <p>Feedback</p>
              </div>
            </Link>
            <Link href={"/help"}>
              <div className={styles.listTile}>
                <IconImage icon={question}
                           width={20}
                           height={20} />
                <p>Aide</p>
              </div>
            </Link>
            <Link href={"/settings"}>
              <div className={styles.listTile}>
                <IconImage icon={settings}
                           width={20}
                           height={20} />
                <p>Options</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.vertixcalFlex}>
          <div className={styles.companyIntro}>
            <Avatar style={{
              width: "50px",
              height: "50px"
            }}>
              <div className={styles.userProfil}>
                <p>P.E</p>
              </div>
            </Avatar>
            <div>
              <p style={{
                fontWeight: "bold",
                fontSize: "16px",
                width: "80px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}>Pierre Edimo Nkoe</p>
              <p style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "grey",
                width: "80px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}>pedimonkoe@yahoo.com</p>
            </div>
            <Image src={downArrow}
                   width={15}
                   height={15}
                   alt={"icon-image"} />
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default SideBarWrapper;