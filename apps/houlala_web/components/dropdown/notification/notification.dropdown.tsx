import { useRecoilState } from "recoil";
import { openState } from "../../../state/dropdown.atoms";
import bell from "../../../public/images/notification.png";
import ButtonContainer from "../../ui-container/button/button.container";
import styles from "./notification.module.scss";
import notification from "../../../public/images/sound-off.png";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import React from "react";
import { HoulalaCard } from "ui";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useRecoilState(openState);

  const openDropdown = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      event.stopPropagation();
      if (!isOpen) {
        document.getElementById("dropdown")!.style.display = "block";
        setIsOpen(true);
      } else {
        document.getElementById("dropdown")!.style.display = "none";
        setIsOpen(false);
      }
    },
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    window.onclick = () => {
      if (isOpen) {
        document.getElementById("dropdown")!.style.display = "none";
        setIsOpen(false);
      }
    };
  });

  return (
    <>
      <div className={styles.dropdownContainer}>
        <div title={"Notifications"} onClick={openDropdown}>
          <ButtonContainer imageSrc={bell} />
        </div>
        <div className={styles.notificationDropdownContainer} id={"dropdown"}>
          <HoulalaCard
            style={{ padding: "10px", minHeight: "inherit", border: "none" }}
          >
            <div className={styles.notificationContainer}>
              <Image
                src={notification}
                alt={"no-notification"}
                width={80}
                height={80}
              />
              <br />
              <p style={{ textAlign: "center" }}>
                Vous n avez encore aucunes Notifications.{" "}
              </p>
            </div>
          </HoulalaCard>
        </div>
      </div>
    </>
  );
};

export default NotificationDropdown;
