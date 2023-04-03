import Link from "next/link";
import React from "react";
import styles from "../styles/bottom.bar.module.scss";
import { NestedLayout } from "./nested.layout";
import Image from "next/image";
import house from "../public/images/house.png";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import user from "../public/images/user.png";
import { useRecoilState } from "recoil";
import UserModal from "../state/user.modal";
import { useRouter } from "next/router";


const BottomBar = () => {
  const [isOpen, setIsOpen] = useRecoilState(UserModal);
  const openModal = () => setIsOpen(true);
  const router = useRouter();

  return (
    <div className={styles.bottomBar}>
      <div className={styles.bottomBarContent}>
        <Link href="/">
          <div className={router.pathname === "/" ? styles.activeIcon : styles.iconContainer}>
            <Image src={house} width={25} height={25} alt="house-image" />
          </div>
        </Link>
        <Link href="/discover">
          <div className={router.pathname === "/discover" ? styles.activeIcon : styles.iconContainer}>
            <Image src={category} width={25} height={25} alt="category-image" />
          </div>
        </Link>
        <Link href="/cart">
          <div className={router.pathname === "/cart" ? styles.activeIcon : styles.iconContainer}>
            <Image src={cart} width={25} height={25} alt="corbeille-image" />
          </div>
        </Link>
        <div onClick={openModal}>
          <div className={styles.iconContainer}>
            <Image src={user} width={25} height={25} alt="user-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;