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
import { EditLocation } from "../../types/edit.location";
import { Address } from "../../types/address";
import LocationService from "../../service/location.service";
import { useSWRConfig } from "swr";
import { UserIdState } from "../../state/user.id.state";
import { SellerInfo } from "../../types/seller.info";
import AuthService from "../../service/auth.service";
import { UserToken } from "../../types/user.token";

type Props = {
    location?: LocationModel
}

const SettingsModal: React.FC<Props> = ({ location }) => {
    const [view, setView] = useState(0);
    const [isLoggedIn, setIsLoggin] = useRecoilState(AuthState);
    const service = new LocationService();
    const authService = new AuthService();
    const router = useRouter();
    const [userId] = useRecoilState(UserIdState);
    const [editMessage, setEditErrorMessage] = useState<string>()
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
    const closeModal = () => {
        const modal = document.getElementById(ModalIsEnum.settings);
        modal!.style.display = "none";
    }
    const { mutate } = useSWRConfig();

    const logout = () => {
        if (isLoggedIn) {
            localStorage.removeItem("userToken");
            router.push("/");
            setIsLoggin(false);
        }
    }

    const onEditSellerInfo = async (event: any) => {

        event.preventDefault();
        const token = localStorage.getItem("userToken");
        const data: SellerInfo = {
            email: event.target.email.value,
            userName: event.target.userName.value
        }

        const userToken: UserToken = JSON.parse(token!);

        const response = await authService.editInfo(`${AUTH_URL}/users/seller`, data, userToken.token!);

        if (response.status === 200) {
            const userToken: UserToken = {
                email: response.data.email,
                userId: response.data.userId,
                token: response.data.token
            };

            localStorage.setItem("userToken", JSON.stringify(userToken));
            mutate(`${process.env.NEXT_PUBLIC_LOCATION_URL}/users/${userId}`);
            closeModal();

        } else {
            setEditErrorMessage("Un probleme est survenu au moment de votre requete. " +
                "Veuillez reessayer plutard. Si le probleme persiste, vous pouvez remplire notre formulaire de contacte");
            return;
        }

    }

    const onUpdateLocation = async (event: any) => {
        event.preventDefault();
        const addressData: Address = {
            city: event.target.city.value,
            poBox: event.target.poBox.value,
            streetName: event.target.streetName.value
        };
        const data: EditLocation = {
            name: event.target.name.value,
            email: event.target.email.value,
            website: event.target.website.value,
            telephoneNumber: event.target.telephoneNumber.value,
            shortDescription: event.target.shortDescription.value,
            countryId: location?.country.id!,
            categoryId: location?.category.id!,
            address: addressData,
            description: event.target.description.value
        }
        const response = await service.editLocation(`${LOCATION_URL}/${location?.id}`, data);
        if (response.status === 200) {
            mutate(`${process.env.NEXT_PUBLIC_LOCATION_URL}/users/${userId}`);
            closeModal();
        }
        if (response !== 200) {
            setEditErrorMessage("Un probleme est survenu au moment de votre requete. " +
                "Veuillez reessayer plutard. Si le probleme persiste, vous pouvez remplire notre formulaire de contacte");
            return;
        }

    }

    const SwitchView = () => {
        switch (view) {
            default:
            case 0:
                return (
                    <div className={styles.accountContainer}>
                        <div className={styles.accountContainerContent}>
                            <form onSubmit={onEditSellerInfo} className={styles.formContainer}>
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
                                    <SubmitButton>
                                        Enregistrer
                                    </SubmitButton>
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
                            <form onSubmit={onUpdateLocation} id="location-input" className={styles.formContainer}>
                                <h3>Mon Commerce</h3>
                                <br />
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
                                            type={"text"}
                                            name={"telephoneNumber"}
                                            placeholder={"Numero de telephone"}
                                            defaultValue={location?.telephoneNumber}
                                        />

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
                                            name={"description"}
                                            defaultValue={location?.description}
                                            placeholder={"Description"} ></textarea>
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <OutlinedButton onClick={closeModal}>
                                        Annuler
                                    </OutlinedButton>
                                    <SubmitButton>
                                        Enregistrer
                                    </SubmitButton>
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
                                <div style={{ padding: "1rem" }}>
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