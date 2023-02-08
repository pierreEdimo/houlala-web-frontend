import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import {useProductList} from "../../swrHooks/product.hooks";
import Spinner from "../../components/spinner";
import {UserIdState} from "../../state/user.id.atoms";
import BackButton from "../../components/back.button";
import FavoriteProductContainer from "../../components/favorite.product.container";
import NoItems from "../../components/no.items";
import stock from "../../public/images/stock.png";

const Favorites: NextPage = () => {

    const [isLoggedIn] = useRecoilState(AuthAtomState);
    const [userIdState, setUserIdState] = useRecoilState(UserIdState);
    const router = useRouter();
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login").then();
        }

        const userToken = JSON.parse(localStorage.getItem("userToken")!);

        if (userToken) {
            setUserIdState(userToken.userId);
        }
    })

    const {products, isLoading, isError} = useProductList(`${PRODUCT_URL}/favorites?userId=${userIdState}`);

    if (isLoading) return (
        <Spinner/>
    )

    if (isError) return (
        <div>...Error</div>
    )


    return (
        <NestedLayout>
            <BackButton title={"Mes Favoris"}/>
            <div style={{height: "10px"}}></div>
            {
                products?.length! < 1 ?
                    <NoItems errorMessage={"Vous n'avez aucuns Produits dans vos favoris"} iconImage={stock}/>
                    : <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}>
                        {
                            products?.map((product) => (
                                <FavoriteProductContainer
                                    key={product._id}
                                    userId={userIdState}
                                    product={product}/>
                            ))
                        }
                    </div>
            }
        </NestedLayout>
    )
}

export default Favorites;