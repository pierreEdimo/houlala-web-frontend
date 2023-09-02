import {AddItem} from "./add.item";

export type AddOrder = {
    userId: string;
    locationUniqueId: string;
    cartItems: AddItem[]
}