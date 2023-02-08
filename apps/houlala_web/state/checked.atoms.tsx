import {atom} from "recoil";

export const CheckdOutState = atom({
    key: "checkout",
    default: false as boolean
});