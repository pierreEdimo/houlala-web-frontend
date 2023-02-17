import React from "react";
import Image from "next/image";
import {useRecoilState} from "recoil";
import UserModal from "../state/user.modal";
import styles from "../styles/user.modal.module.scss";
import {NestedLayout} from "./nested.layout";
import close from "../public/images/close.png";
import AppBarLayout from "./app.bar.layout";
import LoginListTyles from "./login.list.tyles";
import FavoritesListTiles from "./favorites.list.tiles";
import PersonalListTiles from "./personal.list.tiles";
import OrderListTiles from "./order.list.tiles";
import AboutTiles from "./about.tiles";
import ContactTiles from "./contact.tiles";
import ConditionsTiles from "./conditions.tiles";
import PrivacyTiles from "./privacy.tiles";

type MobilUserPageProps = {}

const MobileUserPage: React.FC<MobilUserPageProps> = () => {

    const [isOpen, setIsOpen] = useRecoilState(UserModal);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            {
                isOpen ?
                    <div className={styles.userModal}>
                        <div className={styles.modalContainer}>
                            <AppBarLayout>
                                <div className={styles.modalHeader}>
                                    <h3>Mon Compte</h3>
                                    <div  onClick={closeModal}>
                                        <Image src={close}
                                               alt={"close-icon"}
                                               width={25}
                                               height={25}
                                               style={{marginBottom: "20px"}}/>
                                    </div>
                                </div>
                            </AppBarLayout>
                            <NestedLayout>
                                <FavoritesListTiles/>
                                <OrderListTiles/>
                                <PersonalListTiles/>
                                <AboutTiles/>
                                <ContactTiles/>
                                <ConditionsTiles/>
                                <PrivacyTiles/>
                                <LoginListTyles/>
                            </NestedLayout>
                        </div>
                    </div> : <div></div>
            }
        </>
    )
}

export default MobileUserPage; 