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
import MobileNavSearch from "./mobile.nav.search";
import Image from "next/image";
import { HoulalaAppBar } from "ui";

const AppBar = ({ title }: { title: string }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(MobileSearchFormState);
  const closeForm = () => setIsOpen(false);
  const openForm = () => setIsOpen(true);

  return (
    <HoulalaAppBar>
      <AppBarLayout>
        <div>
          {!isOpen ? (
            <div className={styles.appHeaderContent}>
              <Link title={"Accueil"} href={"/"}>
                <div className={styles.titleContainer}>
                  <Image
                    src={houlala}
                    objectFit="cover"
                    width={90}
                    height={90}
                  />
                  <h2>{title}</h2>
                </div>
              </Link>
              <ButtonContainer onClick={openForm} imageSrc={search} />
            </div>
          ) : (
            <div className={styles.searchboxContainer}>
              <ButtonContainer onClick={closeForm} imageSrc={leftArrow} />
              <MobileNavSearch />
            </div>
          )}
        </div>
        <div
          style={{ display: isOpen ? "none" : "" }}
          className={styles.desktopAppHeaderContent}
        >
          <div>
            <Link href={"/"}>
              <div title={"Accueil"} className={styles.titleContainer}>
                <Image
                  src={houlala}
                  objectFit="cover"
                  alt="Image-icon"
                  width={95}
                  height={95}
                />
                <h2>{title}</h2>
              </div>
            </Link>
          </div>
          <NavSearch />
          <div style={{ display: "flex", gap: "1rem" }}>
            <ButtonContainer
              url={"/discover"}
              title={"Decouvrir"}
              onClick={() => router.push("/discover")}
              imageSrc={category}
            />
            <ButtonContainer
              url={"/cart"}
              title={"Panier"}
              onClick={() => router.push("/cart")}
              imageSrc={cart}
            />
            <NotificationDropdown />
            <OptionsDropdown />
          </div>
        </div>
      </AppBarLayout>
    </HoulalaAppBar>
  );
};

export default AppBar;
