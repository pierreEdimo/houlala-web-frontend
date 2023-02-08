import styles from "../styles/edit.module.scss";
import EditModalContainer from "./edit.modal";
import React, {useEffect} from "react";
import {useRecoilState} from "recoil";
import {UserTokenState} from "../state/user.token";
import AuthService from "../service/auth.service";
import {UserToken} from "../types/user.token";
import {UserInformation} from "../types/user.information";
import {mutate} from "swr";
import {EditAdressState} from "../state/edit.adress.state";

type EditAddressButtonProps = {
    user: UserInformation
}

const EditAddressButton: React.FC<EditAddressButtonProps> = ({user}) => {
    const id = "editAddressModal";
    const [formData] = useRecoilState(EditAdressState);
    const [token, setToken] = useRecoilState(UserTokenState);
    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
    const authService = new AuthService();

    const openModal = () => {
        document.getElementById(`${id}`)!.style.display = "block";
    }

    useEffect(() => {
        const userToken: UserToken = JSON.parse(localStorage.getItem("userToken")!);
        if (userToken) {
            setToken(userToken.token!);
        }
    })

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            city: event.target.city.value,
            country: event.target.country.value,
            streetName: event.target.streetName.value,
            poBox: event.target.poBox.value,
            houseNumber: event.target.houseNumber.value,
        };

        const response = await authService.editAddressData(`${AUTH_URL}/users/address/${user.email}`, data, token);

        if (response.status === 200) {
            const userToken: UserToken = {
                email: response.data.email,
                userId: response.data.userId,
                token: response.data.token
            }
            localStorage.setItem("userToken", JSON.stringify(userToken));
            mutate(`${AUTH_URL}/users/${user.email}`).then();
            document.getElementById(`${id}`)!.style.display = "none";
        } else {
            console.log(response.data);
        }
    }

    return (
        <>
            <EditModalContainer id={`${id}`}>
                <form onSubmit={handleSubmit} className={styles.editForm}>
                    <div className={styles.editFormHeader}>
                        <h3>Modifier Mon Adresse</h3>
                    </div>
                    <br/>
                    <div className={styles.editFormbody}>
                        <input type={"text"}
                               name={"country"}
                               required
                               placeholder={"Pays"}
                               defaultValue={user?.country}
                               value={formData.country}
                        />
                        <input type={"text"}
                               name={"city"}
                               required
                               placeholder={"Ville"}
                               defaultValue={user?.city}
                               value={formData.city}
                        />
                        <input type={"text"}
                               name={"poBox"}
                               placeholder={"B.P"}
                               defaultValue={user?.poBox}
                               value={formData.poBox}
                        />
                        <div style={{
                            display: "flex",
                            gap: "20px"
                        }}>
                            <input type={"text"}
                                   style={{width: "75%"}}
                                   name={"streetName"}
                                   required
                                   placeholder={"Quartier"}
                                   value={formData.streetName}
                                   defaultValue={user?.streetName}
                            />
                            <input type={"text"}
                                   style={{width: "25%"}}
                                   width={"25%"}
                                   name={"houseNumber"}
                                   placeholder={"N.r"}
                                   value={formData.houseNumber}
                                   defaultValue={user?.houseNumber}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className={styles.editFormFooter}>
                        <button type={"button"} onClick={() => document.getElementById(`${id}`)!.style.display = "none"}
                                className={styles.editButton}>Annuller
                        </button>
                        <button style={{
                            background: "orange",
                            border: "none",
                        }} className={styles.editButton}>Enregistrer
                        </button>
                    </div>
                </form>
            </EditModalContainer>
            <button onClick={openModal} className={styles.editButton}>
                Modifier mon adresse
            </button>
        </>
    )
}


export default EditAddressButton;