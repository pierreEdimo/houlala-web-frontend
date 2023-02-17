import {atom} from "recoil";
import {EditEmail} from "../types/edit.email";

export const EditEmailAtoms = atom({
    key: "editemail",
    default: {} as EditEmail
})