import {atom} from "recoil";
import {UserInformation} from "../types/user.information";

export const UserInfoAtoms = atom({
    key: "userinformations",
    default: {} as UserInformation
})