import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthState = atom({
    key: "authentication",
    default: false as boolean,
    effects_UNSTABLE: [persistAtom]
})

export default AuthState; 