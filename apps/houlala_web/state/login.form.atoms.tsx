import {atom} from "recoil";
import {Login} from "../types/login";

export const LoginFormState = atom({
    key: "loginform",
    default: {} as Login
})