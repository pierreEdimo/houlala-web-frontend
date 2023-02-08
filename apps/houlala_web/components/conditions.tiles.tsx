import ListTiles from "./list.tiles";
import terms from "../public/images/terms-and-conditions.png";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import UserModal from "../state/user.modal";

const ConditionsTiles = () => {
    const [isOpen, setIsOpen] = useRecoilState(UserModal);
    const router = useRouter();
    const goToAbout = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        router.push("/conditions").then();
    }
    return (
        <ListTiles icon={terms}
                   onClick={goToAbout}
                   title={"Conditions d' utilisation"}/>
    )
}

export default ConditionsTiles;