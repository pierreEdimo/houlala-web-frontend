import {atom} from "recoil";
import {UserAddress} from "../types/user.address";

export const EditAdressState = atom({
    key: "editAdress",
    default: {} as UserAddress
})