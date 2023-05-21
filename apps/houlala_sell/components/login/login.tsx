import styles from "./login.module.scss";
import { HoulalaCard, HoulalaButton } from "ui";
import * as React from "react";
import { LoginModel } from "../../types/login";
import { useRecoilState } from "recoil";
import AuthState from "../../state/auth.state";
import AuthService from "../../service/auth.service";
import MessageState from "../../state/message.state";
import { UserToken } from "../../types/user.token";
import LoginRenewState from "../../state/home.state";
import { UserIdState } from "../../state/user.id.state";

const Login = () => {
  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const [isLoggin, setLoggedIn] = useRecoilState(AuthState);
  const authService = new AuthService();
  const [message, setMessage] = useRecoilState(MessageState);
  const [loginRenew, setLogginRenew] = useRecoilState(LoginRenewState);
  const [userId, setUserId] = useRecoilState(UserIdState);

  const onLogin = async (event: any) => {
    event.preventDefault();
    const data: LoginModel = {
      email: event.target.email.value,
      passWord: event.target.passWord.value,
    };
    const response = await authService.login(`${AUTH_URL}/users/login`, data);
    if (response.status != 202) {
      switch (response.response.status) {
        case 404:
          setMessage(
            "Votre compte n'a pas ete trouve." +
              " Svp veuillez creer un compte pour acceder a Houlala."
          );
          break;
        case 400:
          setMessage(
            "Une erreur est survenue. Veuillez réessayer plutart." +
              " Si le probleme persiste, veuillez nous contacter."
          );
      }
    } else {
      const userToken: UserToken = {
        email: response.data.email,
        userId: response.data.userId,
        token: response.data.token,
      };
      localStorage.setItem("userToken", JSON.stringify(userToken));
      setUserId(userToken.userId!);
      setLoggedIn(true);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <HoulalaCard>
        <form onSubmit={onLogin} className={styles.loginContainerContent}>
          <div>
            {message ? (
              <div className={styles.errorContainer}>
                <p>{message}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            required
          />
          <input
            type={"password"}
            placeholder={"Mot de passe"}
            name={"passWord"}
            required
          />
          <div
            onClick={() => setLogginRenew(false)}
            className={styles.link}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Mot de passe oublie?
          </div>
          <HoulalaButton type={"submit"} className={"filled"}>
            Se Connecter
          </HoulalaButton>
        </form>
      </HoulalaCard>
    </div>
  );
};

export default Login;
