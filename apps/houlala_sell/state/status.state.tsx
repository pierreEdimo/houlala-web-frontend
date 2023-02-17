import { atom } from "recoil";

const StatusState = atom({
  key: "status",
  default: "all" as string
});

export default StatusState;