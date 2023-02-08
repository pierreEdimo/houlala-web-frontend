import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();

export const AuthAtomState = atom({
    key: "authentication",
    default: false as boolean,
    effects_UNSTABLE: [persistAtom]
})

export default AuthAtomState; 