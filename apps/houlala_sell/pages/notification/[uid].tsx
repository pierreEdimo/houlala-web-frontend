import { NextPage } from "next";
import { useEffect } from "react";
import NestedLayout from "../../components/nested-layout/nested.layout";
import noBell from "../../public/images/sound-off.png";
import Image from "next/image";
import styles from "./notification.module.scss";
import { Container } from "ui";

const Notification: NextPage = () => {

    useEffect(() => {

    });

    return (
        <NestedLayout>
            <div className={styles.notificationContainer}>
                <Container>
                    <h2>Notification</h2>
                    <br />
                    <div className={styles.noNotification}>
                        <Image src={noBell} alt={"icon-image"} width={80} height={80} />
                        <p style={{ textAlign: "center" }}>Vous n'avez encore recu aucunes notifications</p>
                    </div>
                </Container>
            </div>
        </NestedLayout>
    );
};

export default Notification;