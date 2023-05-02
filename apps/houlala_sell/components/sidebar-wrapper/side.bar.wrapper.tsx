import { HoulalaAvatar, SideBar } from "ui";
import Image from "next/image";
import Link from "next/link";
import IconImage from "../icon-image/icon.image";
import dashboard from "../../public/images/dashboard.png";
import order from "../../public/images/clipboard.png";
import boxes from "../../public/images/boxes.png";
import notification from "../../public/images/notification.png";
import question from "../../public/images/question.png";
import styles from "./sidebar.module.scss";
import { LocationModel } from "../../types/locationModel";
import React from "react";
import { useRouter } from "next/router";
import SettingsModal from "../option-modal/settings.modal";
import HelpModal from "../help-modal/help.modal";
import { ModalIsEnum } from "../../types/modal.ids";

type Props = {
    location: LocationModel
}


const SideBarWrapper: React.FC<Props> = ({ location }) => {
    const router = useRouter();
    const openModal = (id: string) => {
        const modal = document.getElementById(id);
        modal!.style.display = "block";
    }
    return (
        <>
            <SettingsModal location={location} />
            <HelpModal />
            <SideBar>
                <div className={styles.sideBarFlex}>
                    <div>
                        <div onClick={() => openModal(ModalIsEnum.settings)} className={styles.companyIntro}>
                            <HoulalaAvatar style={{
                                width: "50px",
                                height: "50px"
                            }}>
                                <Image fill className={styles.imageContent}
                                    src={location.imageUrl}
                                    alt={"person-image"} />
                            </HoulalaAvatar>
                            <h3 className={styles.locationTitle} >
                                {location.name}
                            </h3>
                        </div>
                        <Link href={`/dashboard/${location.uniqueIdentifier}`}>
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
                        <Link href={`/notification/${location.uniqueIdentifier}`}>
                            <div className={styles.listTile}>
                                <IconImage icon={notification}
                                    width={20}
                                    height={20} />
                                <p>Notifications</p>
                            </div>
                        </Link>
                        <div onClick={() => openModal(ModalIsEnum.help)}>
                            <div className={styles.listTile}>
                                <IconImage icon={question}
                                    width={20}
                                    height={20} />
                                <p>Aide</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.mobileSideFlex}>
                    <div>
                        <div onClick={() => openModal(ModalIsEnum.settings)} className={styles.companyIntro}>
                            <HoulalaAvatar style={{
                                width: "50px",
                                height: "50px"
                            }}>
                                <Image fill className={styles.imageContent}
                                    src={location.imageUrl}
                                    alt={"person-image"} />
                            </HoulalaAvatar>
                        </div>
                        <div className={styles.verticalFlex}>
                            <Link href={"/"}>
                                <div className={styles.listTile}>
                                    <IconImage icon={dashboard}
                                        width={20}
                                        height={20} />
                                </div>
                            </Link>
                            <Link href={`/orders/${location.uniqueIdentifier}`}>
                                <div className={styles.listTile}>
                                    <IconImage icon={order}
                                        width={20}
                                        height={20} />
                                </div>
                            </Link>
                            <Link href={`/stock/${location.uniqueIdentifier}`}>
                                <div className={styles.listTile}>
                                    <IconImage icon={boxes}
                                        width={20}
                                        height={20} />
                                </div>
                            </Link>
                            <Link href={`/notification/${location.uniqueIdentifier}`}>
                                <div className={styles.listTile}>
                                    <IconImage icon={notification}
                                        width={20}
                                        height={20} />
                                </div>
                            </Link>
                            <div onClick={() => openModal(ModalIsEnum.help)}>
                                <div className={styles.listTile}>
                                    <IconImage icon={question}
                                        width={20}
                                        height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </>

    );
};

export default SideBarWrapper;