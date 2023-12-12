import React from "react";
import Image from "next/image";
import {useRecoilState} from "recoil";
import UserModal from "../../state/user.modal";
import styles from "./user.modal.module.scss";
import {NestedLayout} from "../layout/mainlayout/nested.layout";
import close from "../../public/images/close.png";
import AppBarLayout from "../layout/appBar/app.bar.layout";
import LoginListTyles from "../tiles/login/login.list.tyles";
import FavoritesListTiles from "../tiles/favorite/favorites.list.tiles";
import PersonalListTiles from "../tiles/personalList/personal.list.tiles";
import OrderListTiles from "../tiles/orderList/order.list.tiles";
import AboutTiles from "../tiles/about/about.tiles";
import ContactTiles from "../tiles/contact/contact.tiles";
import ConditionsTiles from "../tiles/condition/conditions.tiles";
import PrivacyTiles from "../tiles/privacy/privacy.tiles";

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