import { atom } from "recoil";

const MessageState = atom({
    key: 'error-message',
    default: "" as string
});

export default MessageState; 