import {atom} from "recoil";
import {PersonalData} from "../types/personal.data";

export const EditInfoState = atom({
    key: "editinfo",
    default: {} as PersonalData
})