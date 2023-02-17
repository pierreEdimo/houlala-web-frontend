import {NestedLayout} from "../../components/nested.layout";
import {NextPage} from "next";
import BackButton from "../../components/back.button";
import styles from "../../styles/about.module.scss";
import houlala from "../../public/images/houlala1.png";
import Image from "next/image";
import promotion from "../../public/images/promotion.png";
import affordable from "../../public/images/affordable.png";
import projectManagement from "../../public/images/project-management.png";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

const About: NextPage = () => {
    return (
        <NestedLayout>
            <BackButton title={"A propos"}/>
            <div style={{height: "10px"}}></div>
            <div className={styles.aboutContainer}>
                <div className={styles.flexContainer}>
                    <div>
                        <h4 style={{textAlign: "center"}}>Qui Sommes Nous?</h4>
                        <hr className={styles.horizontalLine}/>
                    </div>
                    <div className={styles.bannerContainer}>
                        <div className={styles.imageContainer}>
                            <Image alt={"logo-image"} src={houlala} width={270} height={200}/>
                        </div>
                        <p>
                            Houla la est une idee, une vision, un reve, Celui de permettre aux citoyens Camerounais a
                            court terme,
                            et aux Africains a moyen et a long terme, de pouvoir commander a partir de son smartphone ou
                            d&apos;une page web
                            differents type de produits(fruits, legumes, viandes, fraiches, etc...) et d&apos;etre
                            delivre a son domicile dans les
                            plus brefs delais.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h4 style={{textAlign: "center"}}>Notre Mission</h4>
                <hr className={styles.horizontalLine}/>
                <div style={{height: "10px"}}></div>
                <div className={styles.gridContainer}>
                    <div className={styles.boxContainer}>
                        <Image src={promotion}
                               alt={"loud-speaker"}
                               width={85}
                               height={85}
                        />
                        <p>La promotion et la vente des produits locaux</p>
                    </div>
                    <div className={styles.boxContainer}>
                        <Image src={affordable}
                               alt={"affordable"}
                               width={85}
                               height={85}
                        />
                        <p>
                            La vente de produits a des prix affordables pour
                            tous
                        </p>
                    </div>
                    <div className={styles.boxContainer}>
                        <Image src={projectManagement}
                               alt={"technology"}
                               width={85}
                               height={85}/>
                        <p> Promouvoir
                            l&apos;apprentissage et
                            l&apos;usage de
                            nouvelles technologies </p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <h4 style={{textAlign: "center"}}>Nos Contacts</h4>
                <hr className={styles.horizontalLine}/>
                <div className={styles.contactContainer}>
                    <div>
                        <p>E-mail:</p>
                        <Link href={"mailto:pierre.edimo@houlala.store"}>
                            pierre.edimo@houlala.store
                        </Link>
                    </div>
                    <br/>
                    <div>
                        <p>telephone:</p>
                        <Link href={"tel:+237697590470"}>
                            +237 6 97 59 04 70
                        </Link>
                    </div>
                    <br/>
                    <div>
                        <p>Nos Reseaux Sociaux</p>
                        <div style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "2px"
                        }}>
                            <Link href={"https://www.facebook.com/"}>
                                <FontAwesomeIcon style={{
                                    fontSize: "28px",
                                    color: "blue",
                                    cursor:"pointer"
                                }}
                                                 icon={faFacebook}/>
                            </Link>
                            <Link href={"https://www.youtube.com/"}>
                                <FontAwesomeIcon style={{
                                    fontSize: "28px",
                                    color: "red",
                                    cursor: "pointer"
                                }}
                                    icon={faYoutube}/>
                            </Link>
                            <Link href={"https://www.instagram.com/"}>
                                <FontAwesomeIcon style={{
                                    fontSize: "28px",
                                    color: "darkred",
                                    cursor: "pointer"
                                }} icon={faInstagram}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </NestedLayout>
    )
}

export default About; 