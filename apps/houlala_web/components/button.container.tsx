import React from "react";
import Image, {StaticImageData} from "next/image";
import styles from "../styles/button.module.scss";


type ButtonContainerProps = {
    imageSrc: StaticImageData,
    onClick?: () => void
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({imageSrc, onClick}: {
    imageSrc: StaticImageData,
    onClick?: () => void
}) => {
    return (
        <>
            <div onClick={onClick}
                 className={styles.roundedButtonContainer}>
                <Image src={imageSrc} alt={"icon-image"} width={25} height={25}/>
            </div>
        </>
    )
}

export default ButtonContainer;