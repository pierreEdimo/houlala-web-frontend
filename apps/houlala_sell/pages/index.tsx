import type { NextPage } from "next";
import { UserToken } from "../types/user.token";
import { useLocation } from "../hooks/location.hooks";
import styles from "../styles/Home.module.scss";
import { Avatar, BorderedCard } from "ui";
import Image from "next/image";
import logo from "../public/images/houlala1.png"
import { useRouter } from "next/router";
import store from "../public/images/outline_store.png";


const Home: NextPage = () => {
    const userToken: UserToken = JSON.parse(localStorage!.getItem("userToken")!);
    const userId: string = userToken!.userId!;
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const { location, isLoading, error } = useLocation(`${LOCATION_URL}/users/${userId}`);
    const router = useRouter();

    if (isLoading) return (<div>...Loading</div>);

    return (
        <div className={styles.homeMain}>
            <div className={styles.innerheader}>
                <div className={styles.innerheaderContent}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <Avatar style={{ width: "80px", height: "80px" }}>
                            <Image src={logo}
                                fill
                                style={{ objectFit: "cover" }}
                                alt={"product-image"}
                            />
                        </Avatar>
                        <h2>Houla la pour vendeur</h2>
                    </div>
                </div>
            </div>
            <div className={styles.welComeMessage}>
                {
                    location ?
                        <div>
                            <h3 style={{ textAlign: "center" }}>Bienvenu sur Houla la pour vendeur</h3>
                            <p style={{ textAlign: "center", fontSize: "14px", color: "grey" }}>Selectionnez votre Commerce</p>
                            <br />
                            <BorderedCard>
                                <div onClick={() => router.push(`/dashboard/${location?.uniqueIdentifier}`)} className={styles.locationContainer}>
                                    <Avatar>
                                        <Image src={location?.imageUrl!} alt="logo-image" fill style={{ objectFit: "cover", borderRadius: "50%" }} />
                                    </Avatar>
                                    <div>
                                        <p><b>{location?.name!}</b></p>
                                        <p style={{ fontSize: "16px", color: "grey" }}>{location?.address.city + ', ' + location?.country.name}</p>
                                    </div>
                                </div>
                            </BorderedCard>
                        </div> :
                        <div>
                            <h3 style={{ textAlign: "center" }}>Bienvenu sur Houla la pour vendeur</h3>
                            <p style={{ textAlign: "center", fontSize: "16px", color: "grey" }}>Vous n'avez de Commerce sur Houla la</p>
                            <br />
                            <button style={{ display: "flex", gap: "1rem", margin: "auto" }} className={styles.validateButton}>
                                <Image
                                    alt="store-image"
                                    src={store}
                                    width={15}
                                    height={15}
                                />
                                Creer un Commerce
                            </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Home;
