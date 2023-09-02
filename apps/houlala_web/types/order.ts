import {CartItem} from "./cart.item";
import {SimpleLocation} from "./simple.location";

export type Order = {
    id: string;
    status: string;
    confirmed: boolean;
    payMentMode: string;
    createdAt: Date;
    updatedAt: Date;
    totalQuantity: number;
    totalPrice: number;
    cartItems: CartItem[];
    location: SimpleLocation
}
