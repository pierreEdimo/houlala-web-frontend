import {useRouter} from "next/router";
import ListTiles from "./list.tiles";
import {useRecoilState} from "recoil";
import UserModal from "../state/user.modal";
import heart from "../public/images/heart (1).png";


const FavoritesListTiles = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(UserModal);

    const goToFavorite = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        
        router.push("/favorites").then();
    }

    return (
        <ListTiles
            onClick={goToFavorite}
            icon={heart}
            title={"Mes Favoris"}/>
    )
}

export default FavoritesListTiles;