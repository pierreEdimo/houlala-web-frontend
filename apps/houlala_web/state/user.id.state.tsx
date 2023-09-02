import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserIdState = atom({
    key: "userIdent",
    default: "unknown" as string,
    effects_UNSTABLE: [persistAtom]
});
