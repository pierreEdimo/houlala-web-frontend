import {atom} from "recoil";

export const LocaleLoadingState = atom({
    key: 'loading',
    default: false as boolean
})