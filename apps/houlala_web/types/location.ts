import {Address} from "./address";
import {LocationCategory} from "./location.category";
import {Creator} from "./creator";
import {Country} from "./country";

export type Location = {
    id: number,
    name: string,
    description: string,
    telephoneNumber: string,
    email: string,
    website: string,
    uniqueIdentifier: string,
    imageUrl: string,
    orderTotalCount: number,
    orderSoldCount: number,
    orderCanceledCount: number,
    productTotalCount: number,
    address: Address,
    category: LocationCategory,
    creator: Creator,
    country: Country,
    shortDescription: string
}