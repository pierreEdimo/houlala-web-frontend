import { NextPage } from "next";
import { NestedLayout } from "../../components/layout/mainlayout/nested.layout";
import { useRecoilState } from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import { useEffect } from "react";
import { useRouter } from "next/router";
import BackButton from "../../components/back-button/back.button";
import styles from "../../styles/login.module.scss";
import Link from "next/link";
import { Register } from "../../types/register";
import { RegisterFormState } from "../../state/register.atoms";
import AuthService from "../../service/auth.service";
import { UserToken } from "../../types/user.token";
import { HoulalaButton, HoulalaCard } from "ui";
import { UserIdState } from "../../state/user.id.state";
import { UserTokenState } from "../../state/user.token.atoms";
import { UserEmailState } from "../../state/user.email";

const LogupPage: NextPage = () => {
  const [isLoggedIn, setLoggedIn] = useRecoilState<boolean>(AuthAtomState);
  const router = useRouter();
  const [formData] = useRecoilState<Register>(RegisterFormState);
  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const authService = new AuthService();
  const [userId, setUserId] = useRecoilState(UserIdState);
  const [userToken, setUserToken] = useRecoilState(UserTokenState);
  const [email, setEmail] = useRecoilState(UserEmailState);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/").then();
    }
  });

  const register = async (event: any) => {
    event.preventDefault();

    const data: Register = {
      email: event.target.email.value,
      passWord: event.target.passWord.value,
      city: event.target.city.value,
      country: event.target.country.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      houseNumber: event.target.houseNumber.value,
      userName: event.target.userName.value,
      streetName: event.target.streetName.value,
      phoneNumber: event.target.phoneNumber.value,
      poBox: event.target.poBox.value,
    };

    const response = await authService.register(
      `${AUTH_URL}/users/register`,
      data
    );
    if (response.status == 201) {
      const userToken: UserToken = {
        email: response.data.email,
        userId: response.data.userId,
        token: response.data.token,
      };
      setUserToken(userToken.token!);
      setUserId(userToken.userId);
      setEmail(userToken.email); 
      setLoggedIn(true);
      router.push("/").then();
    }
  };

  return (
    <NestedLayout>
      <BackButton title={"Nouveau compte"} />
      <div style={{ height: "1rem" }}></div>
      <div className={styles.logupContainer}>
        <HoulalaCard style={{ margin: "auto", background: "white" }}>
          <div style={{ margin: "auto" }} className={styles.loginFormContainer}>
            <form onSubmit={register} className={styles.loginForm}>
              <input
                type={"email"}
                placeholder={"E-mail"}
                name={"email"}
                value={formData.email}
                required
              />
              <input
                type={"password"}
                placeholder={"mot de passe"}
                value={formData.passWord}
                name={"passWord"}
                required
              />
              <div className={styles.logupFlex}>
                <input
                  className={styles.smallInput}
                  type={"number"}
                  placeholder={"+237"}
                  disabled
                />
                <input
                  className={styles.largeInput}
                  type={"number"}
                  placeholder={"numero de telephone"}
                  value={formData.phoneNumber}
                  name={"phoneNumber"}
                />
              </div>
              <input
                type={"text"}
                placeholder={"Nom"}
                value={formData.lastName}
                required
                name={"lastName"}
              />
              <input
                type={"text"}
                placeholder={"Prenom"}
                required
                value={formData.firstName}
                name={"firstName"}
              />
              <input
                type={"text"}
                placeholder={"surnom"}
                required
                value={formData.userName}
                name={"userName"}
              />
              <div className={styles.logupFlex}>
                <input
                  type={"text"}
                  placeholder={"Quartier"}
                  className={styles.largeInput}
                  value={formData.streetName}
                  name={"streetName"}
                />
                <input
                  className={styles.smallInput}
                  type={"text"}
                  placeholder={"N.r"}
                  value={formData.houseNumber}
                  name={"houseNumber"}
                />
              </div>
              <input
                type={"text"}
                placeholder={"Pays"}
                defaultValue={"Cameroun"}
                value={formData.country}
                name={"country"}
                disabled
              />
              <div className={styles.logupFlex}>
                <input
                  type={"text"}
                  placeholder={"Ville"}
                  className={styles.largeInput}
                  required
                  value={formData.city}
                  name={"city"}
                />
                <input
                  type={"text"}
                  placeholder={"B.P"}
                  className={styles.smallInput}
                  value={formData.poBox}
                  name={"poBox"}
                />
              </div>
              <HoulalaButton type={"submit"} className={"filled"}>
                Creer un compte
              </HoulalaButton>
            </form>
            <div style={{ marginTop: "30px" }}>
              <div>
                Vous avez deja un compte ?{" "}
                <Link href={"/login"} style={{ cursor: "pointer" }}>
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </HoulalaCard>
      </div>
    </NestedLayout>
  );
};

export default LogupPage;
