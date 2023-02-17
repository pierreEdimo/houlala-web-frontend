import { UserInformation } from "./user.information";
import { CartItem } from "./cart.item";

export type Order = {
  _id: string;
  status: string;
  confirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  totalQuantity: number;
  totalPrice: number;
  userInformation: UserInformation;
  cartItems: Array<CartItem>;
  deliveryDate?: Date;
}