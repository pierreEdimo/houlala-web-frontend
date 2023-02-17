import {atom} from "recoil";

export const UserIdState = atom({
    key: "userId",
    default: "" as string
})