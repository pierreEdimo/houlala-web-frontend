import {atom} from "recoil";

export const UserEmailState = atom({
    key: "userEmail",
    default: "" as string
});