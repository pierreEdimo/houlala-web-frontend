import {atom} from "recoil";

const MobileSearchFormState = atom({
    key: "mobilesearch",
    default: false as boolean
});

export default MobileSearchFormState;