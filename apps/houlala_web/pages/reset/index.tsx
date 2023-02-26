import { NextPage } from "next";
import { NestedLayout } from "../../components/nested.layout";
import styles from "../../styles/login.module.scss";
import Avatar from "../../components/avatar";
import houlala from "../../public/images/houlala.png";
import BackButton from "../../components/back.button";

const Reset: NextPage = () => {
  return (
    <NestedLayout>
      <BackButton title={"Nouveau mot de passe"} />
      <div className={styles.loginContainer}>
        <div className={styles.imageContainer}>
          <Avatar imageUrl={houlala} type={"avatar"} />
        </div>
        <div className={styles.loginFormContainer}>
          <form className={styles.loginForm}>
            <input type={"email"}
                   placeholder={"E-mail"}
                   name={"email"}
                   required />
            <input type={"password"}
                   placeholder={"Nouveau mot de passe"}
            required/>
          </form>
        </div>
      </div>
    </NestedLayout>
  );
};

export default Reset;