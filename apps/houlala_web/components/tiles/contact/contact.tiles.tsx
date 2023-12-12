import ListTiles from "../list/list.tiles";
import contact from "../../../public/images/contact-mail.png";
import Link from "next/link";
import {useRecoilState} from "recoil";
import UserModal from "../../../state/user.modal";

const ContactTiles = () => {
    const [isOpen, setIsOpen] = useRecoilState(UserModal);
    const close = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    }
    return (
        <Link href={"mailto:pierredimo@live.com"}>
            <ListTiles icon={contact}
                       onClick={close}
                       title={"Contactez nous"}/>
        </Link>
    )
}

export default ContactTiles;