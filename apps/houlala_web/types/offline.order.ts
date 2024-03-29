import {CartItem} from "./cart.item";

export type OfflineOrder = {
    id?: number
    locationUniqueId: string;
    locationName: string;
    totalQuantity: number;
    totalPrice: number;
    cartItems: Array<CartItem>;
    payMentMode: string;
}