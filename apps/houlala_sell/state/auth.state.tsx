import { atom } from "recoil";


export const AuthState = atom({
    key: "authentication",
    default: false as boolean,
})

export default AuthState; 