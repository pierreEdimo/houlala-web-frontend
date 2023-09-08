import { NextPage } from "next";
import { NestedLayout } from "../../components/nested.layout";
import styles from "../../styles/login.module.scss";
import { useRecoilState } from "recoil";
import { LoginFormState } from "../../state/login.form.atoms";
import { Login } from "../../types/login";
import { useRouter } from "next/router";
import AuthService from "../../service/auth.service";
import { UserToken } from "../../types/user.token";
import { useEffect, useState } from "react";
import AuthAtomState from "../../state/auth.atoms";
import Link from "next/link";
import { HoulalaButton, HoulalaCard } from "ui";
import { UserTokenState } from "../../state/user.token.atoms";
import { UserIdState } from "../../state/user.id.state";
import { UserEmailState } from "../../state/user.email";

const LoginPage: NextPage = () => {
  const [formData] = useRecoilState<Login>(LoginFormState);
  const [isLoggedIn, setLoggedIn] = useRecoilState<boolean>(AuthAtomState);
  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const router = useRouter();
  const authService = new AuthService();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userToken, setUserToken] = useRecoilState(UserTokenState);
  const [userId, setUserId] = useRecoilState(UserIdState);
  const [email, setEmail] = useRecoilState(UserEmailState);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/").then();
    }
  });

  const login = async (event: any) => {
    event.preventDefault();
    const data: Login = {
      email: event.target.email.value,
      passWord: event.target.passWord.value,
    };

    const response = await authService.login(`${AUTH_URL}/users/login`, data);
    if (response.status != 202) {
      switch (response.response.status) {
        case 404:
          setErrorMessage(
            "Vous n'avez pas ete trouve dans notre base de donnee, svp creez un compte."
          );
          break;
        case 400:
          setErrorMessage(
            "Votre e-mail ou votre mot de passe est faux, svp reessayez plutard." +
              "Si le probleme persiste veuillez contacter notre service client."
          );
      }
    } else {
      const userToken: UserToken = {
        email: response.data.email,
        userId: response.data.userId,
        token: response.data.token,
      };

      setUserToken(userToken.token);
      setUserId(userToken.userId);
      setEmail(userToken.email);
      setLoggedIn(true);
      router.push("/").then();
    }
  };

  return (
    <NestedLayout>
      <div className={styles.loginContainer}>
        <HoulalaCard style={{margin: "auto"}}>
          <div style={{margin: "auto"}} className={styles.loginFormContainer}>
            <form onSubmit={login} className={styles.loginForm}>
              {errorMessage ? (
                <div className="error-message">{errorMessage}</div>
              ) : (
                <div></div>
              )}
              <input
                type={"text"}
                placeholder={"E-mail"}
                name={"email"}
                required
                value={formData.email}
              />
              <input
                type={"password"}
                placeholder={"Mot de passe"}
                required
                value={formData.passWord}
                name={"passWord"}
              />
              <Link href={"/reset"}>
                <p
                  style={{
                    fontWeight: "bold",
                    margin: "20px 0 20px 0",
                    cursor: "pointer",
                  }}
                >
                  Mot de passe oublie? / Probleme de connexion?
                </p>
              </Link>
              <HoulalaButton className={"filled"} type={"submit"}>
                se connecter
              </HoulalaButton>
            </form>
            <div style={{ marginTop: "30px" }}>
              <p>
                Vous etes nouveau ?{" "}
                <Link href={"/logup"} style={{ cursor: "pointer" }}>
                  Enregistrer
                </Link>
              </p>
            </div>
          </div>
        </HoulalaCard>
      </div>
    </NestedLayout>
  );
};

export default LoginPage;
