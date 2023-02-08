import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import {useRecoilState} from "recoil";
import AuthAtomState from "../../state/auth.atoms";
import OnlineCart from "../../components/online.cart";
import OfflineCart from "../../components/offline.cart";
import BackButton from "../../components/back.button";
import {useEffect, useState} from "react";
import styles from "../../styles/category.module.scss";

const Index: NextPage = () => {
    const [hasloggedIn] = useRecoilState(AuthAtomState);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

    useEffect(() => {
        if (hasloggedIn) {
            setIsLoggedIn(hasloggedIn);
        }
    }, [setIsLoggedIn, hasloggedIn])

    return (
        <>
            <NestedLayout>
                <h2 className={styles.categoryTitle}>Mon panier</h2>
                <div className={styles.backButtonContainer}>
                    <BackButton title={"Mon panier"}/>
                </div>
                <div style={{height: "10px"}}></div>
                <div>
                    {
                        isLoggedIn ?
                            <OnlineCart/> :
                            <OfflineCart/>
                    }
                </div>
            </NestedLayout>
        </>
    )
}

export default Index; 