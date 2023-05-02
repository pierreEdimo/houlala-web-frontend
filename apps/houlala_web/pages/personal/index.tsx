import { NextPage } from "next";
import { NestedLayout } from "../../components/nested.layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import { UserTokenState } from "../../state/user.token";
import { UserEmailState } from "../../state/user.email";
import { UserToken } from "../../types/user.token";
import { useUserInfo } from "../../swrHooks/user.hooks";
import BackButton from "../../components/back.button";
import styles from "../../styles/account.module.scss";
import { Card } from "../../components/card";
import EditInfosButton from "../../components/edit.infos.button";
import EditAddressButton from "../../components/edit.address.button";
import EditEmailButton from "../../components/edit.email.button";
import { HoulalaSpinner } from "ui/components/loading-spinner/houlala-spinner";

const Personal: NextPage = () => {

  const [isLoggedIn] = useRecoilState(AuthAtomState);
  const [userToken, setUserToken] = useRecoilState(UserTokenState);
  const [userEmail, setUserEmail] = useRecoilState(UserEmailState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login").then();
    }

    const userToken: UserToken = JSON.parse(localStorage.getItem("userToken")!);
    if (userToken) {
      setUserEmail(userToken.email!);
      setUserToken(userToken.token!);
    }
  });

  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const { user, isLoading, isError } = useUserInfo(`${AUTH_URL}/users/${userEmail}`, userToken);

  if (isLoading) {
    return (
      <>
        <HoulalaSpinner />
      </>
    );
  }

  if (isError) {
    return (
      <div>
        ...Error
      </div>
    );
  }

  return (
    <NestedLayout>
      <BackButton title={"Mon compte"} />
      <div style={{ height: "20px" }}></div>
      <div className={styles.desktopFlexContainer}>
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <Card>
              <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                  <h4>Adresse e-mail</h4>
                </div>
                <br />
                <div>
                  <p>{user?.email}</p>
                </div>
              </div>
            </Card>
            <div className={styles.infoFooter}>
              <EditEmailButton user={user!} />
            </div>
            <Card>
              <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                  <h4>Informations personnelles</h4>
                </div>
                <br />
                <div>
                  <p>{user?.userName}</p>
                  <p>{user?.lastName} {user?.firstName}</p>
                  <p>+237 {user?.phoneNumber}</p>
                </div>
              </div>
            </Card>
            <div className={styles.infoFooter}>
              <EditInfosButton user={user!} />
            </div>
          </div>
          <div className={styles.colRight}>
            <Card>
              <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                  <h4>Adresse de livraison</h4>
                </div>
                <br />
                <div>
                  <p>{user?.streetName} {user?.houseNumber}</p>
                  <p>{user?.poBox}, {user?.city}</p>
                  <p>{user?.country}</p>
                </div>
                <br />

              </div>
            </Card>
            <div className={styles.infoFooter}>
              <EditAddressButton user={user!} />
            </div>
          </div>
        </div>
      </div>
    </NestedLayout>
  );
};

export default Personal;