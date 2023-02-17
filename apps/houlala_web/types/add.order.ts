import {AddItem} from "./add.item";

export type AddOrder = {
    userId: string;
    locationId: string;
    cartItems: AddItem[]
}