import { NextPage } from "next";
import styles from "./renew.module.scss";
import { BorderedCard, IconImage, RoundedButton, SubmitButton } from "ui";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import AuthState from "../../state/auth.state";
import { useRouter } from "next/router";
import AuthService from "../../service/auth.service";
import { LoginModel } from "../../types/login";
import { HttpStatusCode } from "axios";
import leftArrow from "../../public/images/left-arrow.png";
import LoginRenewState from "../../state/home.state";

const Renew = () => {
    const [isLoggin] = useRecoilState(AuthState);
    const router = useRouter();
    const authService = new AuthService();
    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loginRenew, setLoginReview] = useRecoilState(LoginRenewState);

    const reset = async (event: any) => {
        event.preventDefault();
        const data: LoginModel = {
            email: event.target.email.value,
            passWord: event.target.passWord.value
        };

        const response = await authService.renew(`${AUTH_URL}/users/renewPassword`, data);
        if (response.status != HttpStatusCode.Ok) {
            switch (response.response.status) {
                case HttpStatusCode.NotFound:
                    setErrorMessage("Votre E-mail n'a pas ete retrouve. Svp reessayez plutard. Si" +
                        "le probleme persiste, contactez nous");
            }
        } else {
            router.push("/").then();
        }

    };

    useEffect(() => {
        if (isLoggin) {
            router.push("/").then();
        }
    })

    return (
        <>
            <div className={styles.insideHeader}>
                <RoundedButton onClick={() => setLoginReview(true)} >
                    <IconImage src={leftArrow} />
                </RoundedButton>
                <b>Se Connecter</b>
            </div>
            <div className={styles.centerContainer}>
                <BorderedCard>
                    <form onSubmit={reset} className={styles.formContainer}>
                        <div>{
                            errorMessage ? <div className={styles.errorContainer}>
                                <p>{errorMessage}</p>
                            </div> : <div></div>
                        }</div>
                        <input type={"email"}
                            placeholder="E-mail"
                            name={"email"}
                            required />
                        <input type={"password"}
                            placeholder="Nouveau mot de passe"
                            name={"passWord"}
                            required />
                        <SubmitButton>
                            Enregistrer
                        </SubmitButton>
                    </form>
                </BorderedCard>
            </div>
        </>

    )
}

export default Renew; 