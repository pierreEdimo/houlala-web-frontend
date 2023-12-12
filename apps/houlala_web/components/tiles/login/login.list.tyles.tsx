import ListTiles from "../list/list.tiles";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import UserModal from "../../../state/user.modal";
import AuthAtomState from "../../../state/auth.atoms";
import {useEffect, useState} from "react";
import signIn from "../../../public/images/sign-in.png";
import logOut from "../../../public/images/log-out.png";

const LoginListTyles = () => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(UserModal);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(AuthAtomState);
    const [localAuth, setLocalState] = useState<boolean>();

    useEffect(() => {
        if (isLoggedIn) {
            setLocalState(isLoggedIn);
        }
    }, [isLoggedIn, setIsLoggedIn])

    const goToLogin = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        router.push("/login").then()
    }

    const logout = async () => {
        if (isOpen) {
            setIsOpen(false);
        }
        router.push("/").then(() => {
            localStorage.removeItem("userToken");
            setIsLoggedIn(false);
            setLocalState(false);
            router.reload();
        })
    }

    return (
        <div>
            {
                localAuth ?
                    <ListTiles
                        onClick={logout}
                        icon={logOut}
                        title={"Se deconnecter"}/>
                    :
                    <ListTiles
                        onClick={goToLogin}
                        icon={signIn}
                        title={"Se Connecter/s'enregister"}/>
            }
        </div>
    )
}

export default LoginListTyles;