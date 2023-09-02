import {CartItem} from "./cart.item";
import {UserInformation} from "./user.information";

export type UnregistedUserOrder = {
    locationUniqueId: string;
    userInformation: UserInformation;
    cartItems: Array<CartItem>;
}