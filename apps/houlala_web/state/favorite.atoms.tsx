import {atom} from "recoil";

export const FavoriteState = atom({
    key: 'favorite',
    default: false as Boolean,
})