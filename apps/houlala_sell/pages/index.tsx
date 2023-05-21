import type { NextPage } from "next";
import { useLocation } from "../hooks/location.hooks";
import styles from "../styles/Home.module.scss";
import { HoulalaAvatar, HoulalaButton, HoulalaCard, HoulalaSpinner } from "ui";
import Image from "next/image";
import logo from "../public/images/houlala1.png";
import { useRouter } from "next/router";
import store from "../public/images/outline_store.png";
import CreateLocationModal from "../components/create-modal/create.modal";
import { ModalIsEnum } from "../types/modal.ids";
import { useRecoilState } from "recoil";
import { UserIdState } from "../state/user.id.state";

const Home: NextPage = 	() => {
  const [userId, setUserId] = useRecoilState(UserIdState);
  const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
  const { location, isLoading, error } = useLocation(
    `${LOCATION_URL}/users/${userId}`
  );
  const router = useRouter();

  const openModal = () => {
    document.getElementById(ModalIsEnum.createLocationModal)!.style.display =
      "block";
  };

  if (isLoading)
    return (
      <div>
        <HoulalaSpinner />
      </div>
    );

  if (error) return <div>...Error</div>;

  return (
    <div className={styles.homeMain}>
      <CreateLocationModal />
      <div className={styles.innerheader}>
        <div className={styles.innerheaderContent}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <HoulalaAvatar style={{ width: "80px", height: "80px" }}>
              <Image
                src={logo}
                fill
                style={{ objectFit: "cover" }}
                alt={"product-image"}
              />
            </HoulalaAvatar>
            <h2>Houla la pour vendeur</h2>
          </div>
        </div>
      </div>
      <div className={styles.welComeMessage}>
        {location ? (
          <div>
            <h3 style={{ textAlign: "center" }}>
              Bienvenu sur Houla la pour vendeur
            </h3>
            <p style={{ textAlign: "center", fontSize: "14px", color: "grey" }}>
              Selectionnez votre Commerce
            </p>
            <br />
            <HoulalaCard>
              <div
                onClick={() =>
                  router.push(`/dashboard/${location?.uniqueIdentifier}`)
                }
                className={styles.locationContainer}
              >
                <HoulalaAvatar>
                  <Image
                    src={location?.imageUrl!}
                    alt="logo-image"
                    fill
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </HoulalaAvatar>
                <div>
                  <p>
                    <b>{location?.name!}</b>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "grey",
                    }}
                  >
                    {location?.address.city + ", " + location?.country.name}
                  </p>
                </div>
              </div>
            </HoulalaCard>
          </div>
        ) : (
          <div>
            <h3 style={{ textAlign: "center" }}>
              Bienvenu sur Houla la pour vendeur
            </h3>
            <p style={{ textAlign: "center", fontSize: "16px", color: "grey" }}>
              Vous n'avez de Commerce sur Houla la
            </p>
            <br />
            <HoulalaButton
              type={"button"}
              onClick={openModal}
              style={{ display: "flex", gap: "1rem", margin: "auto" }}
              className={"filled"}
            >
              <Image alt="store-image" src={store} width={15} height={15} />
              Creer un Commerce
            </HoulalaButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
