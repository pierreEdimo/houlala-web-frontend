import ListTiles from "../list/list.tiles";
import privacy from "../../../public/images/privacy-policy.png";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import UserModal from "../../../state/user.modal";

const PrivacyTiles = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(UserModal);

    const goToPrivacy = () => {
        router.push("/policy").then(() => {
            if (isOpen) {
                setIsOpen(false);
            }
        });
    }
    return (
        <ListTiles icon={privacy}
                   onClick={goToPrivacy}
                   title={"Politique de confidentialite"}/>
    )
}

export default PrivacyTiles;