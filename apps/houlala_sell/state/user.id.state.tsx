import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist(); 

export const UserIdState = atom({
    key: "userId",
    default: "" as string, 
    effects_UNSTABLE: [persistAtom]
}); 