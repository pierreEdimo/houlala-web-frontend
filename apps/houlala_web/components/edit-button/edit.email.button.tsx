import styles from "./edit.module.scss";
import EditModalContainer from "../modal/edit.modal";
import { useRecoilState } from "recoil";
import { EditEmailAtoms } from "../../state/edit.email.atoms";
import AuthService from "../../service/auth.service";
import React from "react";
import { UserToken } from "../../types/user.token";
import { UserInformation } from "../../types/user.information";
import { mutate } from "swr";
import { HoulalaButton } from "ui";
import { UserTokenState } from "../../state/user.token.atoms";
import { UserEmailState } from "../../state/user.email";

type EditEmailButtonProps = {
  user: UserInformation;
};

const EditEmailButton: React.FC<EditEmailButtonProps> = ({ user }) => {
  let id = "emailModal";
  const [formData] = useRecoilState(EditEmailAtoms);
  const [token, setToken] = useRecoilState(UserTokenState);
  const [email, setEmail] = useRecoilState(UserEmailState);
  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const authService = new AuthService();

  const openModal = () => {
    document.getElementById(`${id}`)!.style.display = "block";
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
    };

    const response = await authService.editEmailData(
      `${AUTH_URL}/users/email/${user.email}`,
      data,
      token
    );

    if (response.status === 200) {
      const userToken: UserToken = {
        email: response.data.email,
        userId: response.data.userId,
        token: response.data.token,
      };
      setToken(userToken.token);
      setEmail(userToken.email);
      mutate(`${AUTH_URL}/users/${user.email}`).then();
      document.getElementById(`${id}`)!.style.display = "none";
    } else {
      console.log(response.data);
    }
  };

  return (
    <>
      <EditModalContainer id={`${id}`}>
        <form onSubmit={handleSubmit} className={styles.editForm}>
          <div className={styles.editFormHeader}>
            <h3>Modifier Mon E-mail</h3>
          </div>
          <br />
          <div className={styles.editFormbody}>
            <input
              type={"email"}
              name={"email"}
              required
              placeholder={"email"}
              value={formData.email}
              defaultValue={user.email}
            />
          </div>
          <br />
          <div className={styles.editFormFooter}>
            <HoulalaButton
              type={"button"}
              onClick={() =>
                (document.getElementById(`${id}`)!.style.display = "none")
              }
              className={"outlined"}
            >
              Annuller
            </HoulalaButton>
            <HoulalaButton type={"submit"} className={"filled"}>
              Enregistrer
            </HoulalaButton>
          </div>
        </form>
      </EditModalContainer>
      <HoulalaButton
        style={{ width: "100%" }}
        type={"button"}
        onClick={openModal}
        className={"outlined"}
      >
        Modifier mon E-mail
      </HoulalaButton>
    </>
  );
};

export default EditEmailButton;
