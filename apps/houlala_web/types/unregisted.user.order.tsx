import {CartItem} from "./cart.item";
import {UserInformation} from "./user.information";

export type UnregistedUserOrder = {
    locationId: string;
    userInformation: UserInformation;
    cartItems: Array<CartItem>;
}