import houlala from "../public/images/houlala1.png";
import Link from "next/link";
import search from "../public/images/search.png";
import React from "react";
import styles from "../styles/app.bar.module.scss";
import ButtonContainer from "./button.container";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import { useRouter } from "next/router";
import NotificationDropdown from "./notification.dropdown";
import OptionsDropdown from "./options.dropdown";
import NavSearch from "./nav.search";
import { useRecoilState } from "recoil";
import leftArrow from "../public/images/left-arrow.png";
import MobileSearchFormState from "../state/mobile.search.atoms";
import AppBarLayout from "./app.bar.layout";
import Avatar from "./avatar";
import MobileNavSearch from "./mobile.nav.search";


const AppBar = ({ title }: { title: string }) => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(MobileSearchFormState);
  const closeForm = () => setIsOpen(false);
  const openForm = () => setIsOpen(true);

  return (
    <header className={styles.appHeader}>
      <AppBarLayout>
        <div>
          {
            !isOpen ? <div className={styles.appHeaderContent}>
                <Link title={"Accueil"} href={"/"}>
                  <div className={styles.titleContainer}>
                    <div style={{
                      width: "80px",
                      height: "80px"
                    }}>
                      <Avatar imageUrl={houlala} type={"avatar"} />
                    </div>
                    <h2>{title}</h2>
                  </div>
                </Link>
                <ButtonContainer onClick={openForm} imageSrc={search} />
              </div> :
              <div style={{
                display: "flex",
                alignItems: "center",
                height: "110px",
                gap: "10px"
              }}>
                <ButtonContainer onClick={closeForm} imageSrc={leftArrow} />
                <MobileNavSearch />
              </div>
          }
        </div>
        <div className={styles.desktopAppHeaderContent}>
          <div>
            <Link href={"/"}>
              <div title={"Accueil"} className={styles.titleContainer}>
                <div style={{
                  width: "80px",
                  height: "80px"
                }}>
                  <Avatar imageUrl={houlala} type={"avatar"} />
                </div>
                <h2>{title}</h2>
              </div>
            </Link>
          </div>
          <NavSearch />
          <div style={{ display: "flex", gap: "20px" }}>
            <ButtonContainer url={"/discover"} title={"Decouvrir"} onClick={() => router.push("/discover")} imageSrc={category} />
            <ButtonContainer url={"/cart"} title={"Panier"} onClick={() => router.push("/cart")} imageSrc={cart} />
            <NotificationDropdown />
            <OptionsDropdown />
          </div>
        </div>
      </AppBarLayout>
    </header>
  );
};

export default AppBar;