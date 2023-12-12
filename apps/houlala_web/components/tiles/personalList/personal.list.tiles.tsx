import ListTiles from "../list/list.tiles";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import UserModal from "../../../state/user.modal";
import userIcon from "../../../public/images/user.png";

const PersonalListTiles = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(UserModal);

    const goToPersonal = () => {
        if (isOpen) {
            setIsOpen(false);
        }

        router.push("/personal").then();
    }

    return (
        <ListTiles
            onClick={goToPersonal}
            icon={userIcon}
            title={"Mon compte"}/>
    )
}

export default PersonalListTiles;