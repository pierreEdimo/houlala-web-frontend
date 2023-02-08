import {atom} from "recoil";

export const QuantityState = atom({
    key: "quantity",
    default: 1 as number,
})