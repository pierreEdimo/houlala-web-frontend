import {atom} from "recoil";

export const UserTokenState = atom({
    key: "userToken",
    default: "" as string
});