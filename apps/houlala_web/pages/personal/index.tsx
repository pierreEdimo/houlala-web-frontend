import { NextPage } from "next";
import { NestedLayout } from "../../components/layout/mainlayout/nested.layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import { UserEmailState } from "../../state/user.email";
import { useUserInfo } from "../../swrHooks/user.hooks";
import BackButton from "../../components/back-button/back.button";
import styles from "../../styles/account.module.scss";
import { Card } from "../../components/card/card";
import EditInfosButton from "../../components/edit-button/edit.infos.button";
import EditAddressButton from "../../components/edit-button/edit.address.button";
import EditEmailButton from "../../components/edit-button/edit.email.button";
import { HoulalaSpinner } from "ui";
import { UserTokenState } from "../../state/user.token.atoms";

const Personal: NextPage = () => {

  const [isLoggedIn] = useRecoilState(AuthAtomState);
  const [userToken] = useRecoilState(UserTokenState);
  const [userEmail] = useRecoilState(UserEmailState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login").then();
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