import axios from "axios";
import { Help } from "../types/help";

class EmailService {
    sendEmail = async (url: string, help: Help) => {
        return await axios.post<void>(url, help)
            .then((res) => res)
            .catch((err) => err);
    };
}

export default EmailService; 