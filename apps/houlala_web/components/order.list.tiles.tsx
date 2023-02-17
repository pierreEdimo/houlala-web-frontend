import ListTiles from "./list.tiles";
import {useRecoilState} from "recoil";
import UserModal from "../state/user.modal";
import {useRouter} from "next/router";
import orderIcon from "../public/images/order.png";

const OrderListTiles = () => {
    const [isOpen, setIsOpen] = useRecoilState(UserModal);
    const router = useRouter();

    const order = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        router.push("/order").then();
    }

    return (
        <ListTiles
            onClick={order}
            icon={orderIcon}
            title={"Mes Commandes"}/>
    )
}

export default OrderListTiles;