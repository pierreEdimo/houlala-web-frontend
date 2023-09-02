import {Creator} from "./creator";

export type Product = {
    id: number,
    name: string,
    description: string,
    weight: number,
    imageUrl: string,
    sellingPrice: number,
    locationUniqueId: string,
    bookMarked: boolean,
    quantity: number,
    arrivalDate?: Date,
    buyingPrice: number,
    originLabel: string,
    productSku: string,
    locationName: string,
    creator: Creator
}