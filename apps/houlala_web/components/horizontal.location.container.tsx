import {Location} from "../types/location";
import styles from "../styles/location.module.scss";
import Avatar from "./avatar";
import {Card} from "./card";
import Link from "next/link";

export function HorizontalLocationContainer({location}: { location: Location }) {
    return (
        <>
            <Card>
                <Link href={`/location/${location.id}`}>
                    <div className={styles.locationContainer}>
                        <div className={styles.imageContainer}>
                            <Avatar
                                imageUrl={location.imageUrl}
                                type={"avatar"}
                            />
                        </div>
                        <div style={{height: 10}}></div>
                        <h3 className={styles.productTitle}>{location.name}</h3>
                        <h4 className={styles.smallTitle}>{location.category.name}</h4>
                        <h5 className={styles.smallTitle}>{location.address.city}</h5>
                    </div>
                </Link>
            </Card>
        </>
    );
}