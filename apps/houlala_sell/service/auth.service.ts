import axios from "axios";
import { LoginModel } from "../types/login";
import { UserToken } from "../types/user.token";

class AuthService {
    login = async (url: string, login: LoginModel) => {
        return await axios.post<UserToken>(url, login)
            .then((res) => res)
            .catch((err) => err);
    };
}

export default AuthService