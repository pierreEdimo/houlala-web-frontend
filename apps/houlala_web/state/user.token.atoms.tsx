import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserTokenState = atom({
  key: "userToken",
  default: "" as string,
  effects_UNSTABLE: [persistAtom]
});
