export type Product = {
    _id: string;
    name: string;
    description: string;
    weight: number;
    imageUrl: string;
    sellingPrice: number;
    locationId: string;
    quantity: number;
    arrivalDate?: Date;
    buyingPrice: 120;
    originLabel: string;
    productSku: string;
    totalSell?: number;
}