import { NextPage } from "next";
import { NestedLayout } from "../../components/layout/mainlayout/nested.layout";
import styles from "../../styles/login.module.scss";
import BackButton from "../../components/back-button/back.button";
import { useRecoilState } from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthService from "../../service/auth.service";
import { Login } from "../../types/login";
import { HttpStatusCode } from "axios";
import {HoulalaCard} from "ui";

const Reset: NextPage = () => {
  const [isLoggin] = useRecoilState(AuthAtomState);
  const router = useRouter();
  const authService = new AuthService();
  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    if (isLoggin) {
      router.push("/").then();
    }
  });

  const reset = async (event: any) => {
    event.preventDefault();
    const data: Login = {
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
      router.push("/login").then();
    }

  };

  return (
    <NestedLayout>
      <BackButton title={"Nouveau mot de passe"} />
      <div className={styles.loginContainer}>
       <HoulalaCard style={{margin: "auto", width: "100%", background: "white"}}>
         <div style={{margin: "auto"}} className={styles.loginFormContainer}>
           <form onSubmit={reset} className={styles.loginForm}>
             {
              errorMessage ?
                <div className="error-message">
                  {errorMessage}
                </div> :
                <div></div>
            }
             <input type={"email"}
               placeholder={"E-mail"}
               name={"email"}
               required />
             <input type={"password"}
               placeholder={"Nouveau mot de passe"}
               name={"passWord"}
               required />
             <button className={styles.submitButton} type={"submit"}>Enregistrer</button>
           </form>
         </div>
       </HoulalaCard>
      </div>
    </NestedLayout>
  );
};

export default Reset;