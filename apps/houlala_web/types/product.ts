import {Creator} from "./creator";

export type Product = {
    _id: string,
    name: string,
    description: string,
    weight: number,
    imageUrl: string,
    sellingPrice: number,
    locationId: string,
    bookMarked: boolean,
    quantity: number,
    arrivalDate?: Date,
    buyingPrice: number,
    originLabel: string,
    productSku: string,
    locationName: string,
    creator: Creator
}