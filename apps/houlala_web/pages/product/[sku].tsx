import { NextPage } from "next";
import styles from "../../styles/product.module.scss";
import { useRouter } from "next/router";
import { NestedLayout } from "../../components/nested.layout";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useProduct } from "../../swrHooks/product.hooks";
import BackButton from "../../components/back.button";
import QuantityCounter from "../../components/quantity.counter";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { AddItem } from "../../types/add.item";
import { AddOrder } from "../../types/add.order";
import { UserIdState } from "../../state/user.id.atoms";
import OrderService from "../../service/order.service";
import ModalContainer from "../../components/modal.container";
import close from "../../public/images/close.png";
import AuthAtomState from "../../state/auth.atoms";
import ProductService from "../../service/product.service";
import { mutate } from "swr";
import { CartItem } from "../../types/cart.item";
import { OfflineOrder } from "../../types/offline.order";
import redHeart from "../../public/images/heart.png";
import outlineHeart from "../../public/images/heart (1).png";
import { FavoriteState } from "../../state/favorite.atoms";
import shoppingBag from "../../public/images/shopping-bag.png";
import { HoulalaButton, HoulalaSpinner } from "ui";

const Product: NextPage = () => {
  const router = useRouter();
  const { sku } = router.query;
  const PRODUCT_Url = process.env.NEXT_PUBLIC_PRODUCT_URL;
  const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [userId, setUserId] = useRecoilState(UserIdState);
  const orderService = new OrderService();
  const productService = new ProductService();
  const [textMessage, setTextMessage] = useState<string>("");
  const [authState] = useRecoilState(AuthAtomState);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const { product, isLoading, isError } = useProduct(`${PRODUCT_Url}/favorite/sku/${sku}?userId=${userId}`);
  const [isFavorite, setIsFavorite] = useRecoilState(FavoriteState);

  useEffect(() => {
    if (authState) {
      setIsLoggedIn(authState);
    }

    const userToken = JSON.parse(localStorage.getItem("userToken")!);
    if (userToken) {
      setUserId(userToken.userId);
    }

    if (product?.bookMarked) {
      setIsFavorite(product.bookMarked);
    }

    setPrice(quantity * product?.sellingPrice!);
  }, [setPrice, product?.sellingPrice, quantity, setUserId, authState]);

  if (isLoading) return (
    <div>
      <HoulalaSpinner />
    </div>
  );

  if (isError) return (
    <NestedLayout>
      ....Error
    </NestedLayout>
  );

  const increaseQuantity = () => {
    if (quantity < 25) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    if (isLoggedIn) {
      const items: AddItem[] = [];
      const item: AddItem = {
        productSku: product?.productSku!,
        quantity: quantity,
        price: price,
        initialPrice: product?.sellingPrice!
      };
      items.push(item);
      const order: AddOrder = {
        userId: userId,
        locationId: product?.locationId!,
        cartItems: items
      };
      const response = await orderService.onlineOrder(`${ORDER_URL}`, order);
      if (response.status === 201) {
        setTextMessage("Un nouvel article a ete ajoute dans votre panier. Vous avez  1 ou plusieurs articles dans votre panier.");
        document.getElementById("modal")!.style.display = "block";
      }

    } else {
      const items: Array<CartItem> = new Array<CartItem>();
      const item: CartItem = {
        productSku: product?.productSku!,
        quantity: quantity,
        price: price,
        product: product?.name!,
        initialPrice: product?.sellingPrice!,
        imageUrl: product?.imageUrl!
      };
      items.push(item);

      const order: OfflineOrder = {
        locationId: product?.locationId!,
        locationName: product?.locationName!,
        totalQuantity: quantity,
        totalPrice: price,
        cartItems: items,
        payMentMode: "cash"
      };
      const result = await orderService.addOfflineOrder(order);
      if (result) {
        setTextMessage("Un nouvel article a ete ajoute dans votre panier. Vous avez  1 ou plusieurs articles dans votre panier.");
        document.getElementById("modal")!.style.display = "block";
      }

    }
  };

  const addToFavorite = async () => {
    if (isLoggedIn) {
      const response = await productService.bookMarkProduct(`${PRODUCT_Url}/favorites/${product?._id}?userId=${userId}`);
      if (response.status === 202) {
        await mutate(`${PRODUCT_Url}/favorite/sku/${sku}?userId=${userId}`).then();
      }
    } else {
      router.push("/login").then();
    }
  };

  const closeModal = () => {
    document.getElementById("modal")!.style.display = "none";
  };

  const goToCart = () => {
    router.push("/cart").then();
  };

  return (
    <>
      <NestedLayout>
        <ModalContainer>
          <div>
            <div style={{ float: "right", cursor: "pointer" }} onClick={closeModal}>
              <Image src={close} width={15} height={15} alt={"close-image"} />
            </div>
            <p>{textMessage}</p>
            <div className={styles.modalButton}>
              <HoulalaButton type={"button"} className={"outlined"} onClick={goToCart}>
                Voir Panier
              </HoulalaButton>
              <HoulalaButton type={"button"} className={"outlined"} onClick={closeModal}>
                Continuer achat
              </HoulalaButton>
            </div>
          </div>
        </ModalContainer>
        <BackButton title={product?.name!} />
        <div style={{ height: "10px" }}></div>
        <div className={styles.productPageContainer}>
          <div className={styles.productPage}>
            <div className={styles.productImageContainer}>
              <div className={styles.productImage}>
                <Image src={product?.imageUrl!}
                       style={{ borderRadius: "5px" }}
                       alt={"product-image"}
                       layout={"fill"}
                       objectFit={"cover"}
                       priority={true} />
              </div>
            </div>
            <div className={styles.infoProductContainer}>

              <div className={styles.priceAndQuantity}>
                <p className={styles.sellingPrice}>{price} XAF</p>
                <QuantityCounter
                  increase={increaseQuantity}
                  decrease={decreaseQuantity}
                  quantity={quantity} />
              </div>
              <div>
                <p style={{ margin: "0" }}>Vendeur: <b>{product?.locationName!}</b></p>
              </div>
              <div className={styles.buttonContainer}>
                <HoulalaButton type={"button"} className={"filled"}
                               onClick={addToCart}>
                  <Image src={shoppingBag}
                         alt={"shopping-bag"}
                         width={18}
                         height={18} />
                  <p>Ajouter au panier</p>
                  <div></div>
                </HoulalaButton>
                <HoulalaButton className={"outlined"} type={"button"} onClick={addToFavorite}>
                  {
                    isFavorite ? <Image src={redHeart}
                                        alt={"heart-image"}
                                        height={15}
                                        width={15} /> :
                      <Image src={outlineHeart}
                             alt={"heart-image"}
                             height={15}
                             width={15}
                      />
                  }
                  <p>Ajouter aux favoris</p>
                  <div></div>
                </HoulalaButton>
              </div>
            </div>
          </div>
          <ReactMarkdown>
            {product?.description!}
          </ReactMarkdown>
        </div>
        <div className={styles.mobileProductPageContainer}>
          <div className={styles.productImageContainer}>
            <div className={styles.productImage}>
              <Image src={product?.imageUrl!}
                     layout={"fill"}
                     objectFit={"cover"}
                     priority={true}
                     alt={"product-image"}
                     style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className={styles.mobileInfoProductContainer}>
            <div className={styles.mobileProductCount}>
              <p className={styles.sellingPrice}>{price} XAF</p>
              <QuantityCounter increase={increaseQuantity}
                               decrease={decreaseQuantity}
                               quantity={quantity} />
            </div>
            <div>
              <p style={{ margin: "0" }}>Vendeur: <b>{product?.locationName!}</b></p>
            </div>
            <div className={styles.buttonContainer}>
              <HoulalaButton className={"filled"} type={"button"} onClick={addToCart}>
                <Image src={shoppingBag}
                       alt={"shopping-bag"}
                       height={18}
                       width={18} />
                <p>Ajouter au panier</p>
                <div></div>
              </HoulalaButton>
              <HoulalaButton type={"button"} className={"outlined"} onClick={addToFavorite}>
                {
                  isFavorite ? <Image src={redHeart}
                                      alt={"heart-image"}
                                      height={15}
                                      width={15} /> :
                    <Image src={outlineHeart}
                           alt={"heart-image"}
                           height={15}
                           width={15}
                    />
                }
                <p>Ajouter aux favoris</p>
                <div></div>
              </HoulalaButton>
            </div>
          </div>
          <ReactMarkdown>
            {product?.description!}
          </ReactMarkdown>
        </div>
      </NestedLayout>
    </>
  );
};

export default Product;