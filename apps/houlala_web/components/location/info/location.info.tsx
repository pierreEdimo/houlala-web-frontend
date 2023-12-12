import { Location } from "../../../types/location";
import React from "react";
import styles from "../../../styles/location.module.scss";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

type LocationInfoProps = {
    location: Location
}

const LocationInfo: React.FC<LocationInfoProps> = ({ location }) => {
    return (
        <>
            <h2>A Propos</h2>
            <div style={{ height: "10px" }}></div>
            <ReactMarkdown>
                {location?.description!}
            </ReactMarkdown>
            <div style={{ height: "20px" }}></div>
            <h2>Contacts</h2>
            <div className={styles.contactInfoContainer}>
                <div className={styles.contactContainer}>
                    <p>Email:</p>
                    <Link href={`mailto:${location?.email}`}>{location?.email!}</Link>
                </div>
                <div className={styles.contactContainer}>
                    <p>Telephone:</p>
                    <Link href={`tel:${location?.telephoneNumber}`}>{location?.telephoneNumber}</Link>
                </div>
                <div className={styles.contactContainer}>
                    <p>Domaine:</p>
                    <p>{location?.category.name}</p>
                </div>
                <div className={styles.contactContainer}>
                    <p>Site:</p>
                    <p>{location?.country.name}</p>
                </div>
                <div className={styles.contactContainer}>
                    <p>Prenom:</p>
                    <p>{location?.creator.firstName}</p>
                </div>
                <div className={styles.contactContainer}>
                    <p>Nom:</p>
                    <p>{location?.creator.lastName}</p>
                </div>
                <div className={styles.contactContainer}>
                    <p>Adresse:</p>
                    <p>{`${location?.address.streetName} ${location?.address.city}`},
                        ${location?.country.name}</p>
                </div>
            </div>
        </>
    );
};

export default LocationInfo;