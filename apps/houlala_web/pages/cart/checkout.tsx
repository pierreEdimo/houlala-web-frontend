import { NextPage } from "next";
import { NestedLayout } from "../../components/nested.layout";
import { useRecoilState } from "recoil";
import { UserIdState } from "../../state/user.id.atoms";
import { UserEmailState } from "../../state/user.email";
import { UserTokenState } from "../../state/user.token";
import { useEffect, useState } from "react";
import { UserToken } from "../../types/user.token";
import { CheckdOutState } from "../../state/checked.atoms";
import { useCartItemList } from "../../swrHooks/order.hooks";
import Spinner from "../../components/spinner";
import { useUserInfo } from "../../swrHooks/user.hooks";
import { useRouter } from "next/router";
import BackButton from "../../components/back.button";
import styles from "../../styles/checkout.module.scss";
import { Card } from "../../components/card";
import Image from "next/image";
import Avatar from "../../components/avatar";
import store from "../../public/images/store.png";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderService from "../../service/order.service";
import checked from "../../public/images/checked.png";
import EditInfosButton from "../../components/edit.infos.button";
import EditAddressButton from "../../components/edit.address.button";
import AuthAtomState from "../../state/auth.atoms";
import { useLiveQuery } from "dexie-react-hooks";
import { OfflineOrderTable } from "../../localDb/database.config";
import { UserInfoAtoms } from "../../state/user.info.atoms";
import stylesForm from "../../styles/login.module.scss";
import { CartItem } from "../../types/cart.item";
import { UserInformation } from "../../types/user.information";
import { UnregistedUserOrder } from "../../types/unregisted.user.order";
import { OfflineOrder } from "../../types/offline.order";


const Checkout: NextPage = () => {

  const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;
  const USER_URL = process.env.NEXT_PUBLIC_AUTH_URL;
  const [userId, setUserId] = useRecoilState(UserIdState);
  const [userEmail, setUserEmail] = useRecoilState(UserEmailState);
  const [token, setUserToken] = useRecoilState(UserTokenState);
  const [checkedOut, setCheckedOut] = useRecoilState(CheckdOutState);
  const { user, isLoading } = useUserInfo(`${USER_URL}/users/${userEmail}`, token);
  const { items, isError } = useCartItemList(`${ORDER_URL}/carts?userId=${userId}`);
  const router = useRouter();
  const orderService = new OrderService();
  const [authState] = useRecoilState(AuthAtomState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [formData] = useRecoilState(UserInfoAtoms);
  const offlineOrders = useLiveQuery(async () => {
    return OfflineOrderTable.toArray();
  });

  useEffect(() => {
    const userToken: UserToken = JSON.parse(localStorage.getItem("userToken")!);
    if (userToken) {
      setUserId(userToken.userId!);
      setUserToken(userToken.token!);
      setUserEmail(userToken.email!);
    }

    if (authState) {
      if (items?.length! < 1 && !checkedOut) {
        router.push("/").then();
      }
      setIsLoggedIn(authState);
    } else {
      if (offlineOrders?.length! < 1 && !checkedOut) {
        router.push("/").then();
      }
    }

  }, [setIsLoggedIn,
    authState,
    checkedOut,
    offlineOrders,
    items,
    router,
    setUserEmail,
    setUserId,
    setUserToken]);

  const confirmCommand = async () => {
    const response = await orderService.confirmCommand(`${ORDER_URL}/confirm`, user!);
    if (response.status === 204) {
      setCheckedOut(true);
    }
  };

  const confirmUnregistedOrderCommand = async (event: any) => {
    event.preventDefault();
    const data: UserInformation = {
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      city: event.target.city.value,
      country: event.target.country.value,
      poBox: event.target.poBox.value,
      houseNumber: event.target.houseNumber.value,
      streetName: event.target.streetName.value
    };

    for (let order of offlineOrders!) {
      const newOrder: UnregistedUserOrder = {
        locationId: order.locationId,
        cartItems: order.cartItems,
        userInformation: data
      };

      const response = await orderService.confirmOrderAsGuest(`${ORDER_URL}/unregistereds`, newOrder);
      if (response.status === 201) {
        await OfflineOrderTable.delete(order.id);
        setCheckedOut(true);
      }
    }
  };

  if (isLoggedIn) {
    if (isLoading) return (
      <Spinner />
    );

    if (isError) return (
      <div>...Error</div>
    );

    return (
      <NestedLayout>
        {
          checkedOut ?
            <div className={styles.successfull}>
              <div style={{ width: "60px", height: "60px" }}>
                <Avatar imageUrl={checked} type={"avatar"} />
              </div>
              <p style={{ textAlign: "center" }}>Votre Commande a ete effectuee avec succes.</p>
              <button onClick={() => router.push("/")} className={styles.validateButton}>
                Retourner a l&apos;accueil
              </button>
            </div> :
            <div>
              <BackButton title={"Caisse"} />
              <div style={{ height: "10px" }}></div>
              {
                items ?
                  <div className={styles.flexContainer}>
                    <div className={styles.colLeft}>
                      <Card>
                        <div className={styles.infoHeader}>
                          <h4>Informations personnelles</h4>
                        </div>
                        <br />
                        <div>
                          <p>{user?.userName}</p>
                          <p>{user?.lastName} {user?.firstName}</p>
                          <p>+237 {user?.phoneNumber}</p>
                        </div>
                        <br />
                      </Card>
                      <div className={styles.centerFooter}>
                        <EditInfosButton user={user!} />
                      </div>
                      <Card>
                        <div className={styles.infoHeader}>
                          <h4>Mon Adresse</h4>
                        </div>
                        <br />
                        <div>
                          <p>{user?.streetName} {user?.houseNumber}</p>
                          <p>{user?.poBox}, {user?.city}</p>
                          <p>{user?.country}</p>
                        </div>
                        <br />
                      </Card>
                      <div className={styles.centerFooter}>
                        <EditAddressButton user={user!} />
                      </div>
                    </div>
                    <div className={styles.colRight}>
                      <Card>
                        <div className={styles.infoHeader}>
                          <h4>Mes Produits</h4>
                        </div>
                        <br />
                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px"
                        }}>
                          {
                            items.map((order) => (
                              <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                              }} key={order._id}>
                                <>
                                  <div style={{
                                    display: "flex",
                                    gap: "10px"
                                  }}>
                                    <div style={{ height: "25px", width: "25px" }}>
                                      <Avatar imageUrl={store}
                                        type={"thumbnail"} />
                                    </div>
                                    <h4>{order.location.name}</h4>
                                  </div>
                                  {
                                    order.cartItems.map((item) => (
                                      <>
                                        <div style={{
                                          display: "flex",
                                          gap: "10px"
                                        }}
                                          key={item.productSku}>
                                          <div
                                            className={styles.imageContainer}>
                                            <Image src={item.imageUrl}
                                              alt={"product-image"}
                                              objectFit={"contain"}
                                              layout={"fill"}
                                            />
                                          </div>
                                          <div>
                                            <h3>{item.product}</h3>
                                            <p>{item.price}</p>
                                            <p>{item.quantity}</p>
                                          </div>
                                        </div>
                                      </>
                                    ))
                                  }
                                  <div className={styles.payMentMode}>
                                    <p><b>Methode de
                                      paiement: </b> {order.payMentMode}
                                    </p>
                                    <FontAwesomeIcon style={{ color: "green" }}
                                      icon={faMoneyBill} />
                                  </div>
                                </>
                                <div className={styles.infoFooter}>
                                  <p><b>Quantite:</b>{order.totalQuantity}</p>
                                  <p><b>Prix:</b> {order.totalPrice} FCFA</p>
                                </div>
                              </div>
                            )
                            )
                          }
                        </div>
                      </Card>
                      <button type={"button"} onClick={confirmCommand}
                        style={{ background: "orange" }}
                        className={styles.validateButton}>
                        Commander
                      </button>
                    </div>
                  </div> :
                  <div></div>
              }
            </div>
        }
      </NestedLayout>
    );
  } else {
    return (
      <NestedLayout>
        <div>
          {
            checkedOut ?
              <div className={styles.successfull}>
                <div style={{ width: "60px", height: "60px" }}>
                  <Avatar imageUrl={checked} type={"avatar"} />
                </div>
                <p style={{ textAlign: "center" }}>Votre Commande a ete effectuee avec succes.</p>
                <button onClick={() => router.push("/")} className={styles.validateButton}>
                  Retourner a l&apos;accueil
                </button>
              </div> :
              offlineOrders?.length! < 1 ?
                <div>No orders</div> :
                <div>
                  <BackButton title={"caisse"} />
                  <div style={{ height: "1rem" }}></div>
                  <form onSubmit={confirmUnregistedOrderCommand} className={styles.flexContainer}>
                    <div className={styles.colLeft}>
                      <Card>
                        <div className={stylesForm.loginForm}>
                          <input type={"email"}
                            placeholder={"E-mail"}
                            name={"email"}
                            value={formData.email}
                            required
                          />
                          <div className={stylesForm.logupFlex}>
                            <input
                              className={stylesForm.smallInput}
                              type={"number"}
                              placeholder={"+237"}
                              disabled
                            />
                            <input
                              className={stylesForm.largeInput}
                              type={"number"}
                              placeholder={"numero de telephone"}
                              value={formData.phoneNumber}
                              name={"phoneNumber"}
                            />
                          </div>
                          <input type={"text"}
                            placeholder={"Nom"}
                            value={formData.lastName}
                            required
                            name={"lastName"}
                          />
                          <input type={"text"}
                            placeholder={"Prenom"}
                            required
                            value={formData.firstName}
                            name={"firstName"}
                          />
                          <div className={stylesForm.logupFlex}>
                            <input type={"text"}
                              placeholder={"Quartier"}
                              className={stylesForm.largeInput}
                              value={formData.streetName}
                              name={"streetName"}
                            />
                            <input
                              className={stylesForm.smallInput}
                              type={"text"}
                              placeholder={"N.r"}
                              value={formData.houseNumber}
                              name={"houseNumber"}
                            />
                          </div>
                          <input type={"text"}
                            placeholder={"Pays"}
                            defaultValue={"Cameroun"}
                            value={formData.country}
                            name={"country"}
                            disabled
                          />
                          <div className={stylesForm.logupFlex}>
                            <input type={"text"}
                              placeholder={"Ville"}
                              className={stylesForm.largeInput}
                              required
                              value={formData.city}
                              name={"city"}
                            />
                            <input type={"text"}
                              placeholder={"B.P"}
                              className={stylesForm.smallInput}
                              value={formData.poBox}
                              name={"poBox"}
                            />
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className={styles.colRight}>
                      {
                        offlineOrders?.map((order: OfflineOrder) => (
                          <div key={order.id}>
                            <Card>
                              <div className={styles.infoHeader}>
                                <h4>Mes Produits</h4>
                              </div>
                              <br />
                              <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem"
                              }}>
                                {
                                  offlineOrders.map((order: OfflineOrder) => (
                                    <div style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "1rem"
                                    }} key={order.id}>
                                      <>
                                        <div style={{
                                          display: "flex",
                                          gap: "10px"
                                        }}>
                                          <div style={{
                                            height: "25px",
                                            width: "25px"
                                          }}>
                                            <Avatar imageUrl={store}
                                              type={"thumbnail"} />
                                          </div>
                                          <h4>{order.locationName}</h4>
                                        </div>
                                        {
                                          order.cartItems.map((item: CartItem) => (
                                            <>
                                              <div style={{
                                                display: "flex",
                                                gap: "10px"
                                              }}
                                                key={item.productSku}>
                                                <div
                                                  className={styles.imageContainer}>
                                                  <Image
                                                    src={item.imageUrl}
                                                    alt={"product-image"}
                                                    objectFit={"contain"}
                                                    layout="fill"
                                                  />
                                                </div>
                                                <div>
                                                  <h3>{item.product}</h3>
                                                  <p>{item.price}</p>
                                                  <p>{item.quantity}</p>
                                                </div>
                                              </div>
                                            </>
                                          ))
                                        }
                                        <div className={styles.payMentMode}>
                                          <p><b>Methode de
                                            paiement: </b> {order.payMentMode}
                                          </p>
                                          <FontAwesomeIcon
                                            style={{ color: "green" }}
                                            icon={faMoneyBill} />
                                        </div>
                                      </>
                                      <div className={styles.infoFooter}>
                                        <p><b>Quantite:</b>{order.totalQuantity}
                                        </p>
                                        <p><b>Prix:</b> {order.totalPrice} FCFA
                                        </p>
                                      </div>
                                    </div>
                                  )
                                  )
                                }
                              </div>
                            </Card>
                            <br />
                            <button type={"submit"}
                              style={{ background: "orange", width: "100%" }}
                              className={styles.validateButton}>
                              Commander
                            </button>
                          </div>
                        ))
                      }
                    </div>
                  </form>
                </div>
          }
        </div>
      </NestedLayout>
    );
  }
};

export default Checkout;