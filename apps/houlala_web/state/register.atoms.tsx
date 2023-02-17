import {atom} from "recoil";
import {Register} from "../types/register";

export const RegisterFormState = atom({
    key: "register",
    default: {} as Register
})