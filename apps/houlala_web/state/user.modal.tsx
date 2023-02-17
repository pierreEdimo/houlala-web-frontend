import {atom} from "recoil";

export const UserModal = atom({
    key: "mobileModal",
    default: false as boolean
});

export default UserModal; 