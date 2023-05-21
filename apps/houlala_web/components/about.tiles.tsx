import ListTiles from "./list.tiles";
import about from "../public/images/about.png";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import UserModal from "../state/user.modal";

const AboutTiles = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(UserModal);

    return (
        <ListTiles icon={about}
                   onClick={() => {
                       if (isOpen) {
                           setIsOpen(false);
                       }
                       router.push("/about").then()
                   }}
                   title={"A propos"}/>
    )
}

export default AboutTiles;