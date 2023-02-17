import React, {useState} from "react";
import styles from "../styles/product.module.scss";
import {Product} from "../types/product";
import Container from "./container";
import Image from "next/image";
import ValidateButton from "./validate.button";
import {useRouter} from "next/router";
import {AddItem} from "../types/add.item";
import {AddOrder} from "../types/add.order";
import OrderService from "../service/order.service";
import close from "../public/images/close.png";
import ModalContainer from "./modal.container";

type FavoriteProductContainerProps = {
    product: Product;
    userId: string
}

const FavoriteProductContainer: React.FC<FavoriteProductContainerProps> = ({product, userId}) => {
    const router = useRouter();
    const orderService = new OrderService();
    const [textMessage, setTextMessage] = useState<string>("");
    const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL;

    const goToDetail = () => {
        router.push(`/product/${product.productSku}`).then();
    }

    const addToCart = async (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const items: AddItem[] = [];
        const item: AddItem = {
            productSku: product.productSku!,
            quantity: 1,
            price: product.sellingPrice,
            initialPrice: product.sellingPrice,
        }
        items.push(item);
        const order: AddOrder = {
            userId: userId,
            locationId: product.locationId,
            cartItems: items
        }
        const response = await orderService.onlineOrder(`${ORDER_URL}`, order);
        if (response.status === 201) {
            setTextMessage("Un nouvel article a ete ajoute dans votre panier. Vous avez  1 ou plusieurs articles dans votre panier.")
            document.getElementById("modal")!.style.display = "block";
        }
    }

    const closeModal = () => {
        document.getElementById("modal")!.style.display = "none";
    }

    const goToCart = () => {
        router.push("/cart").then();
    }

    return (
        <Container>
            <ModalContainer>
                <div>
                    <div style={{float: "right", cursor: "pointer"}} onClick={closeModal}>
                        <Image src={close} width={15} height={15} alt={"close-image"}/>
                    </div>
                    <p>{textMessage}</p>
                    <div className={styles.modalButton}>
                        <ValidateButton onClick={goToCart} title={"Voire panier"}/>
                        <ValidateButton onClick={closeModal} title={"Continuer achat"}/>
                    </div>
                </div>
            </ModalContainer>
            <div onClick={goToDetail}>
                <div className={styles.favoriteProductContainer}>
                    <div className={styles.faImageContainer}>
                        <Image src={product.imageUrl}
                               alt={"product.image"}
                               layout={"fill"}
                               objectFit={"contain"}
                        />
                    </div>
                    <div className={styles.faInfoContainer}>
                        <h3>{product.name}</h3>
                        <p>{product.sellingPrice} FCFA</p>
                        <div className={styles.faButtonContainer}>
                            <div onClick={(event) => addToCart(event)}>
                                <ValidateButton title={"Ajouter au panier"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default FavoriteProductContainer;