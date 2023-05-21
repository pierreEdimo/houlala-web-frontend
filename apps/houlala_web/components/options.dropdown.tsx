import React, { useCallback, useEffect } from "react";
import styles from "../styles/options.module.scss";
import ButtonContainer from "./button.container";
import user from "../public/images/user.png";
import { useRecoilState } from "recoil";
import { OptionState } from "../state/options.atoms";
import LoginListTyles from "./login.list.tyles";
import FavoritesListTiles from "./favorites.list.tiles";
import PersonalListTiles from "./personal.list.tiles";
import OrderListTiles from "./order.list.tiles";
import AboutTiles from "./about.tiles";
import ContactTiles from "./contact.tiles";
import ConditionsTiles from "./conditions.tiles";
import PrivacyTiles from "./privacy.tiles";
import { HoulalaCard } from "ui";

const OptionsDropdown = () => {
  const [isOpen, setIsOpen] = useRecoilState(OptionState);

  const openOptions = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      event.stopPropagation();
      if (!isOpen) {
        document.getElementById("options")!.style.display = "block";
        setIsOpen(true);
      } else {
        document.getElementById("options")!.style.display = "none";
        setIsOpen(false);
      }
    },
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    window.onclick = () => {
      if (isOpen) {
        document.getElementById("options")!.style.display = "none";
        setIsOpen(false);
      }
    };
  });

  return (
    <>
      <div className={styles.optionContainer}>
        <div title={"Options"} onClick={openOptions}>
          <ButtonContainer imageSrc={user} />
        </div>
        <div className={styles.optionsDropdownContent} id={"options"}>
          <HoulalaCard style={{ padding: "10px" }}>
            <h3>Mon Compte</h3>
            <FavoritesListTiles />
            <OrderListTiles />
            <PersonalListTiles />
            <AboutTiles />
            <ContactTiles />
            <ConditionsTiles />
            <PrivacyTiles />
            <LoginListTyles />
          </HoulalaCard>
        </div>
      </div>
    </>
  );
};

export default OptionsDropdown;
