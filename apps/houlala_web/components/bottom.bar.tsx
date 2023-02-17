import Link from "next/link";
import React from "react";
import styles from "../styles/bottom.bar.module.scss";
import {NestedLayout} from "./nested.layout";
import Image from "next/image";
import house from "../public/images/house.png";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import user from "../public/images/user.png";
import {useRecoilState} from "recoil";
import UserModal from "../state/user.modal";
import {useRouter} from "next/router";


const BottomBar = () => {
    const [isOpen, setIsOpen] = useRecoilState(UserModal);
    const openModal = () => setIsOpen(true);

    return (
        <div className={styles.bottomBar}>
            <NestedLayout>
                <div className={styles.bottomBarContent}>
                    <Link href="/">
                        <Image src={house} width={25} height={25} alt="house-image"/>
                    </Link>
                    <Link href="/discover">
                        <Image src={category} width={25} height={25} alt="category-image"/>
                    </Link>
                    <Link href="/cart">
                        <Image src={cart} width={25} height={25} alt="corbeille-image"/>
                    </Link>
                    <div onClick={openModal}>
                        <Image src={user} width={25} height={25} alt="user-image"/>
                    </div>
                </div>
            </NestedLayout>
        </div>
    )
}

export default BottomBar;