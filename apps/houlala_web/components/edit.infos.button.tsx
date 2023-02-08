import styles from "../styles/edit.module.scss";
import EditModalContainer from "./edit.modal";
import React, {useEffect} from "react";
import {useRecoilState} from "recoil";
import {EditInfoState} from "../state/edit.infos.form";
import {UserTokenState} from "../state/user.token";
import {UserToken} from "../types/user.token";
import AuthService from "../service/auth.service";
import {UserInformation} from "../types/user.information";
import {mutate} from "swr";

type EditInfoButtonProps = {
    user: UserInformation
}


const EditInfosButton: React.FC<EditInfoButtonProps> = ({user}) => {
    const id = "editInfosModal";
    const [formData] = useRecoilState(EditInfoState);
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
            lastName: event.target.lastName.value,
            userName: event.target.userName.value,
            phoneNumber: event.target.phoneNumber.value,
            firstName: event.target.firstName.value
        }

        const response = await authService.editPersonalData(`${AUTH_URL}/users/singleUser/${user.email}`, data, token);

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
                        <h3>Modifier Mes Infos</h3>
                    </div>
                    <br/>
                    <div className={styles.editFormbody}>
                        <input type={"text"}
                               name={"lastName"}
                               required
                               placeholder={"Nom"}
                               defaultValue={user?.lastName}
                               value={formData.lastName}
                        />
                        <input type={"text"}
                               name={"firstName"}
                               required
                               placeholder={"Prenom"}
                               defaultValue={user?.firstName}
                               value={formData.firstName}
                        />
                        <input type={"text"}
                               name={"userName"}
                               required
                               placeholder={"Surnom"}
                               defaultValue={user?.userName}
                               value={formData.userName}
                        />
                        <div style={{
                            display: "flex",
                            gap: "20px"
                        }}>
                            <input
                                type={"number"}
                                style={{width: "25%"}}
                                placeholder={"+237"}
                                value={"+237"}
                                disabled
                            />
                            <input
                                style={{width: "75%"}}
                                type={"number"}
                                name={"phoneNumber"}
                                required
                                placeholder={"Numero de telephone"}
                                defaultValue={user?.phoneNumber}
                                value={formData.phoneNumber}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className={styles.editFormFooter}>
                        <button type={"button"} onClick={() => document.getElementById(`${id}`)!.style.display = "none"}
                                className={styles.editButton}>Annuller
                        </button>
                        <button
                            type={"submit"}
                            style={{
                                background: "orange",
                                border: "none",
                            }} className={styles.editButton}>Enregistrer
                        </button>
                    </div>
                </form>
            </EditModalContainer>
            <button onClick={openModal} className={styles.editButton}>
                Modifier mes informations
            </button>
        </>
    )
}


export default EditInfosButton;