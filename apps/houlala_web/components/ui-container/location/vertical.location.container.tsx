import {Location} from "../../../types/location";
import {Card} from "../../card/card";
import styles from "../../../styles/location.module.scss";
import React from "react";
import Avatar from "../../avatar/avatar";
import Link from "next/link";

type VerticalLocationProps = {
    location: Location
}

const VerticalLocationContainer: React.FC<VerticalLocationProps> = ({location}) => {
    return (
        <>
            <Card>
                <Link href={`/location/${location.id}`}>
                    <div className={styles.verticalLocation}>
                        <div>
                            <div className={styles.imageContainer}>
                                <Avatar imageUrl={location.imageUrl} type={"avatar"}/>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.title}>{location.name}</h3>
                            <h4 className={styles.smallTitle}>{location.category.name}</h4>
                            <h5 className={styles.smallTitle}>{location.address.city}</h5>
                            <p className={styles.descriptionText}>{location.shortDescription}</p>
                        </div>
                    </div>
                </Link>
            </Card>
        </>
    )
}

export default VerticalLocationContainer;