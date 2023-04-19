import { atom } from "recoil";


export const LoginRenewState = atom({
    key: "loginRenew",
    default: true as boolean,
})

export default LoginRenewState; 