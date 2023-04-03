import { BorderedCard, IconImage, Modal, SubmitButton, logOutIcon, OutlinedButton } from "ui"
import { ModalIsEnum } from "../../types/modal.ids";
import styles from "./settings.modal.module.scss";
import building from "../../public/images/outline_store.png";
import user from "../../public/images/user.png";
import { useState } from "react";
import { LocationModel } from "../../types/locationModel";
import * as React from "react";
import { useRecoilState } from "recoil";
import AuthState from "../../state/auth.state";
import { useRouter } from "next/router";

type Props = {
    location?: LocationModel
}

const SettingsModal: React.FC<Props> = ({ location }) => {
    const [view, setView] = useState(0);
    const [isLoggedIn, setIsLoggin] = useRecoilState(AuthState);
    const router = useRouter();
    const closeModal = () => {
        const modal = document.getElementById(ModalIsEnum.settings);
        modal!.style.display = "none";
    }

    const logout = () => {
        if (isLoggedIn) {
            localStorage.removeItem("userToken");
            router.push("/");
            setIsLoggin(false);
        }
    }

    const SwitchView = () => {
        switch (view) {
            default:
            case 0:
                return (
                    <div className={styles.accountContainer}>
                        <div className={styles.accountContainerContent}>
                            <form className={styles.formContainer}>
                                <h3>Mon Compte</h3>
                                <br />
                                <div className={styles.inputContainer}>
                                    <input
                                        type={"text"}
                                        name={'userName'}
                                        placeholder={"Nom d'utilisateur"}
                                        required />
                                    <input
                                        type={"email"}
                                        name={"email"}
                                        placeholder={"E-mail"}
                                        required />
                                    <input
                                        type={"password"}
                                        name={"passWord"}
                                        placeholder={"Mot de passe"}
                                        required />
                                    <br />
                                    <OutlinedButton onClick={logout} style={{ margin: "auto", gap: "1rem" }}>
                                        <IconImage src={logOutIcon} />
                                        Se Deconnecter
                                    </OutlinedButton>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <OutlinedButton onClick={closeModal}>
                                        Annuler
                                    </OutlinedButton>
                                    <SubmitButton>Enregistrer</SubmitButton>
                                </div>
                            </form>
                        </div>
                    </div>
                )
                break;
            case 1:
                return (
                    <div className={styles.accountContainer}>
                        <div className={styles.accountContainerContent}>
                            <form className={styles.formContainer}>
                                <h3>Mon Commerce</h3>
                                <br/>
                                <div className={styles.busInputContainer}>
                                    <div className={styles.gridInputContainer}>
                                        <input
                                            type={"text"}
                                            name={"name"}
                                            placeholder={"Nom"}
                                            defaultValue={location?.name}
                                            required />
                                        <input
                                            type={"email"}
                                            name={"email"}
                                            placeholder={"E-mail"}
                                            defaultValue={location?.email}
                                            required />
                                        <input
                                            type={"number"}
                                            name={"telephoneNumber"}
                                            placeholder={"Numero de telephone"}
                                            defaultValue={Number(location?.telephoneNumber)}
                                            required />

                                        <input
                                            type={"url"}
                                            name={"website"}
                                            placeholder={"Site Web"}
                                            defaultValue={location?.website}
                                        />
                                    </div>
                                    <div style={{ height: "1rem" }}></div>
                                    <div className={styles.addressInput}>
                                        <input
                                            type={"text"}
                                            className={styles.streetName}
                                            name={"streetName"}
                                            defaultValue={location?.address.streetName}
                                            placeholder={"Rue"} />
                                        <input
                                            type={"number"}
                                            placeholder={"Boite postale"}
                                            name={"poBox"}
                                            defaultValue={location?.address.poBox}
                                            style={{ width: "20%" }} />
                                    </div>
                                    <div style={{ height: "1rem" }}></div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        <input
                                            type={"text"}
                                            name={"city"}
                                            placeholder={"Ville"}
                                            defaultValue={location?.address.city}
                                            required
                                        />
                                        <input
                                            type={"text"}
                                            name={"shortDescription"}
                                            placeholder={"Courte description"}
                                            defaultValue={location?.shortDescription}
                                            required
                                        />
                                        <textarea
                                            defaultValue={location?.description}
                                            placeholder={"Description"} ></textarea>
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <OutlinedButton onClick={closeModal}>
                                        Annuler
                                    </OutlinedButton>
                                    <SubmitButton>Enregistrer</SubmitButton>
                                </div>
                            </form>
                        </div>
                    </div>
                )

        }
    };

    return (
        <>
            <Modal modalId={ModalIsEnum.settings}>
                <BorderedCard style={{ background: "white", width: "auto" }}>
                    <div className={styles.settingsContainer}>
                        <div className={styles.innerRow}>
                            <div className={styles.leftCol}>
                                <div  style={{ padding: "1rem" }}>
                                    <div onClick={() => setView(0)} style={{ backgroundColor: view === 0 ? 'orange' : '' }} className={styles.menuItem}>
                                        <IconImage src={user} />
                                        <p className={styles.menuName}>Mon Compte</p>
                                    </div>
                                    <div style={{ margin: "0.5rem" }}></div>
                                    <div onClick={() => setView(1)} style={{ backgroundColor: view === 1 ? 'orange' : '' }} className={styles.menuItem}>
                                        <IconImage src={building} />
                                        <p className={styles.menuName}>Mon Commerce</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mainCol}>
                                <SwitchView />
                            </div>
                        </div>
                        <div className={styles.verticalRow}>

                        </div>
                    </div>
                </BorderedCard>
            </Modal>
        </>
    )
}
export default SettingsModal; 