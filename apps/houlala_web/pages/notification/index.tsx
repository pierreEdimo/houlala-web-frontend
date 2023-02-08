import {NextPage} from "next";
import styles from "../../styles/notification.module.scss";
import notification from "../../public/images/sound-off.png";
import Image from "next/image";
import {NestedLayout} from "../../components/nested.layout";


const Index: NextPage = () => {
    return (
        <div>
            <NestedLayout>
                <div className={styles.notificationPage}>
                    <div className={styles.notificationContainer}>
                        <Image src={notification} width={130} height={130} alt="no-notification image"/>
                        <br/>
                        <p style={{textAlign: "center"}}>Vous n avez encore aucunes Notifications. </p>
                    </div>
                </div>
            </NestedLayout>
        </div>
    )
}

export default Index;