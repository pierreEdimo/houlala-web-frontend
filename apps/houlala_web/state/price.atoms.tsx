import {atom} from "recoil";

export const PriceState = atom({
    key: "price",
    default: 1 as number
})