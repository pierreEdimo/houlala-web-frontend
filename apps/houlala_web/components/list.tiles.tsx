import React from "react";
import styles from "../styles/list.tile.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Image, {StaticImageData} from "next/image";

type ListTileProps = {
    icon: StaticImageData,
    title: string,
    onClick?: () => void
}

const ListTiles: React.FC<ListTileProps> = ({icon, title, onClick}) => {
    return (
        <>
            <div onClick={onClick}
                 className={styles.listTileContainer}>
                <div style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                }}>
                    <Image src={icon}
                           alt={"icon-image"}
                           width={20}
                           height={20}/>
                    <p style={{fontSize: "16px"}}>{title}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </>
    )
}

export default ListTiles;