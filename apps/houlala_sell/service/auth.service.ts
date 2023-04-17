import axios from "axios";
import { LoginModel } from "../types/login";
import { UserToken } from "../types/user.token";
import { SellerInfo } from "../types/seller.info";

class AuthService {
    login = async (url: string, login: LoginModel) => {
        return await axios.post<UserToken>(url, login)
            .then((res) => res)
            .catch((err) => err);
    };

    editInfo = async (url: string, info: SellerInfo, userToken: string) => {
        return await axios.put<UserToken>(url, info, {
            headers: {
                Authorization: `${userToken}`
            }
        })
            .then((res) => res)
            .catch((err) => err);
    }
}

export default AuthService