import { Address } from "./address";
import { Category } from "./category";
import { Country } from "./country";

export type LocationModel = {
  id: number;
  name: string;
  description: string;
  telephoneNumber: string;
  email: string;
  website: string;
  uniqueIdentifier: string;
  orderTotalCount: number;
  orderCanceledCount: number;
  productTotalCount: number;
  orderSoldCount: number;
  address: Address;
  category: Category;
  country: Country;
  imageUrl: string;
}