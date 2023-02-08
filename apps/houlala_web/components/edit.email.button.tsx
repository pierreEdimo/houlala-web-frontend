import styles from "../styles/edit.module.scss";
import EditModalContainer from "./edit.modal";
import {useRecoilState} from "recoil";
import {EditEmailAtoms} from "../state/edit.email.atoms";
import {UserTokenState} from "../state/user.token";
import AuthService from "../service/auth.service";
import React, {useEffect} from "react";
import {UserToken} from "../types/user.token";
import {UserInformation} from "../types/user.information";
import {mutate} from "swr";

type EditEmailButtonProps = {
    user: UserInformation
}

const EditEmailButton: React.FC<EditEmailButtonProps> = ({user}) => {
    let id = "emailModal";
    const [formData] = useRecoilState(EditEmailAtoms);
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
            email: event.target.email.value
        }

        const response = await authService.editEmailData(`${AUTH_URL}/users/email/${user.email}`, data, token);

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
                        <h3>Modifier Mon E-mail</h3>
                    </div>
                    <br/>
                    <div className={styles.editFormbody}>
                        <input type={"email"}
                               name={"email"}
                               required
                               placeholder={"email"}
                               value={formData.email}
                               defaultValue={user.email}
                        />
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
                Modifier mon E-mail
            </button>
        </>
    )
}


export default EditEmailButton;