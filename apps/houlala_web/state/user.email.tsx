import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();
export const UserEmailState = atom({
    key: "userEmail",
    default: "" as string,
    effects_UNSTABLE: [persistAtom]
});