import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import styles from "../../styles/login.module.scss";
import {useRecoilState} from "recoil";
import {LoginFormState} from "../../state/login.form.atoms";
import {Login} from "../../types/login";
import {useRouter} from "next/router";
import houlala from "../../public/images/houlala.png";
import Avatar from "../../components/avatar";
import AuthService from "../../service/auth.service";
import {UserToken} from "../../types/user.token";
import {useEffect} from "react";
import AuthAtomState from "../../state/auth.atoms";
import Link from "next/link";

const LoginPage: NextPage = () => {
    const [formData, setFormData] = useRecoilState<Login>(LoginFormState);
    const [isLoggedIn, setLoggedIn] = useRecoilState<boolean>(AuthAtomState);
    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
    const router = useRouter();
    const authService = new AuthService();

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/").then();
        }
    })


    const login = async (event: any) => {
        event.preventDefault();
        const data: Login = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        const response = await authService.login(`${AUTH_URL}/users/login`, data);
        if (response.status != 202) {
            switch (response.response.status) {
                case 404:
                    console.log("User not found")
                    break;
                case 400:
                    console.log("Invalid credential");
            }
        } else {
            const userToken: UserToken = {
                email: response.data.email,
                userId: response.data.userId,
                token: response.data.token
            }
            localStorage.setItem("userToken", JSON.stringify(userToken));
            setLoggedIn(true);
            router.push("/").then();
        }
    }

    return (
        <NestedLayout>
            <div className={styles.loginContainer}>
                <div className={styles.imageContainer}>
                    <Avatar imageUrl={houlala} type={"avatar"}/>
                </div>
                <div className={styles.loginFormContainer}>
                    <form onSubmit={login} className={styles.loginForm}>
                        <input type={"text"}
                               placeholder={"E-mail"}
                               name={"email"}
                               required
                               value={formData.email}
                        />
                        <input
                            type={"password"}
                            placeholder={"Mot de passe"}
                            required
                            value={formData.password}
                            name={"password"}
                        />
                        <p style={{fontWeight: "bold", margin: "20px 0 20px 0"}}>Mot de passe oublie? / Probleme de
                            connexion?</p>
                        <button className={styles.submitButton} type={"submit"}>se connecter</button>
                    </form>
                    <div style={{marginTop: "30px"}}>
                        <p>Vous etes nouveau ? <Link href={"/logup"}
                                                     style={{cursor: "pointer"}}>Enregistrer</Link></p>
                    </div>
                </div>
            </div>
            <div className={styles.mobileLoginPage}>
                <div className={styles.imageContainer}>
                    <Avatar imageUrl={houlala} type={"avatar"}/>
                </div>
                <div className={styles.mobileLoginContainer}>
                    <div className={styles.mobileFormContainer}>
                        <form onSubmit={login} className={styles.loginForm}>
                            <input type={"text"}
                                   placeholder={"E-mail"}
                                   name={"email"}
                                   required
                                   value={formData.email}
                            />
                            <input
                                type={"password"}
                                placeholder={"Mot de passe"}
                                required
                                value={formData.password}
                                name={"password"}
                            />
                            <p style={{fontWeight: "bold", margin: "20px 0 20px 0"}}>Mot de passe oublie? / Probleme de
                                connexion?</p>
                            <button className={styles.submitButton} type={"submit"}>se connecter</button>
                        </form>
                        <div style={{marginTop: "30px"}}>
                            <div>Vous etes nouveau ? <Link href={"/logup"}
                                                           style={{cursor: "pointer"}}>S&apos;enregistrer</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </NestedLayout>
    )
}

export default LoginPage;