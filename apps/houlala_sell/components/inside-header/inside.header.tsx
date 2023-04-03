import styles from "./inside.header.module.scss";
import Image from "next/image";
import leftArrow from "../../public/images/left-arrow.png";
import { useRouter } from "next/router";
import { RoundedButton, IconImage } from "ui";

const InsideHeader = () => {
    const router = useRouter();

    return (
        <div className={styles.insideHeader}>
            <RoundedButton onClick={() => router.back()}>
                <IconImage src={leftArrow}/>
            </RoundedButton>
        </div>
    );
};

export default InsideHeader;