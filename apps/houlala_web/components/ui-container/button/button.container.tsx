import React from "react";
import Image, {StaticImageData} from "next/image";
import styles from "./button.module.scss";
import { useRouter } from "next/router";


type ButtonContainerProps = {
    imageSrc: StaticImageData;
    onClick?: () => void;
    title?: string;
    url?: string;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({imageSrc, onClick, title, url}) => {
    const router = useRouter();

    return (
        <>
            <div style={{background: router.pathname == `${url}` ? "orange": "" }} title={title} onClick={onClick}
                 className={styles.roundedButtonContainer}>
                <Image src={imageSrc} alt={"icon-image"} width={20} height={20}/>
            </div>
        </>
    )
}

export default ButtonContainer;