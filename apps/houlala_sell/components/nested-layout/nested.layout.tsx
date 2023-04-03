import React, { useEffect } from "react";
import { InnerLayout, Row, BottomBar } from "ui";
import SideBarWrapper from "../sidebar-wrapper/side.bar.wrapper";
import styles from "./nested.module.scss";
import { useLocation } from "../../hooks/location.hooks";
import Image from "next/image";
import dashboard from "../../public/images/dashboard.png";
import clipboard from "../../public/images/clipboard.png";
import boxes from "../../public/images/boxes.png";
import bell from "../../public/images/notification.png";
import { useRouter } from "next/router";
import options from "../../public/images/settings.png";
import SettingsModal from "../option-modal/settings.modal";
import { ModalIsEnum } from "../../types/modal.ids";


type Props = {
    children: React.ReactNode
}


const NestedLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const openModal = () => {
        const modal = document.getElementById(ModalIsEnum.settings); 
        modal!.style.display = "block"; 
    }
    const {
        location,
        error,
        isLoading
    } = useLocation(`${process.env.NEXT_PUBLIC_LOCATION_URL}/users/27d54546-5c23-40b3-be65-6701f89e4d9b`);

    if (isLoading) {
        return (
            <div>
                ...Loading
            </div>
        );
    }

    if (error) {
        return (
            <div>
                ...Error
            </div>
        );
    }


    return (
        <div>
            <SettingsModal location={location} />
            <Row>
                <SideBarWrapper location={location!} />
                <div className={styles.main}>
                    <div className={styles.mainBody}>
                        <InnerLayout>
                            {children}
                        </InnerLayout>
                    </div>
                </div>
            </Row>
            <BottomBar>
                <div style={{ background: router.pathname === "/dashboard/[uid]" ? "orange" : "" }}
                    onClick={() => router.push(`/dashboard/${location?.uniqueIdentifier}`)}
                    className={styles.bottomItem}>
                    <Image src={dashboard} alt={"icon-image"} width={18} height={18} />
                </div>
                <div style={{ background: router.pathname === `/orders/[uid]` ? "orange" : "" }}
                    onClick={() => router.push(`/orders/${location?.uniqueIdentifier}`)}
                    className={styles.bottomItem}>
                    <Image src={clipboard} alt={"icon-image"} width={18} height={18} />
                </div>
                <div style={{ background: router.pathname === `/stock/[uid]` ? "orange" : "" }}
                    onClick={() => router.push(`/stock/${location?.uniqueIdentifier}`)}
                    className={styles.bottomItem}>
                    <Image src={boxes} alt={"icon-image"} width={18} height={18} />
                </div>
                <div
                    style={{ background: router.pathname === `/notification/[uid]` ? "orange" : "" }}
                    onClick={() => router.push(`/notification/${location?.uniqueIdentifier}`)}
                    className={styles.bottomItem}>
                    <Image src={bell} alt={"icon-image"} width={18} height={18} />
                </div>
                <div
                    onClick={openModal}
                    className={styles.bottomItem}>
                    <Image src={options} alt={"icon-imge"} width={18} height={18} />
                </div
                >
            </BottomBar>
        </div>
    );
};

export default NestedLayout;