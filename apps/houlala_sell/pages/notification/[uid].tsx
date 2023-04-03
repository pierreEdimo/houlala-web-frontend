import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import NestedLayout from "../../components/nested-layout/nested.layout";
import AuthState from "../../state/auth.state";
import noBell from "../../public/images/sound-off.png";
import Image from "next/image";
import styles from "./notification.module.scss";
import { Container } from "ui";

const Notification: NextPage = () => {
    const [isLoggedIn] = useRecoilState(AuthState);
    const router = useRouter();

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