import { Address } from "./address";

export type EditLocation = {
    name: string; 
    email:string; 
    website:string; 
    telephoneNumber:string; 
    shortDescription: string; 
    description: string; 
    countryId: number; 
    categoryId: number; 
    address: Address; 
}