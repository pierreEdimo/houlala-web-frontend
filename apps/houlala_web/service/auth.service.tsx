import axios from "axios";
import { Login } from "../types/login";
import { UserToken } from "../types/user.token";
import { Register } from "../types/register";
import { PersonalData } from "../types/personal.data";
import { UserAddress } from "../types/user.address";
import { EditEmail } from "../types/edit.email";

class AuthService {

  login = async (url: string, login: Login) => {
    return await axios.post<UserToken>(url, login)
      .then((res) => res)
      .catch((err) => err);
  };

  register = async (url: string, register: Register) => {
    return await axios.post<UserToken>(url, register)
      .then((res) => res)
      .catch((err) => err);
  };

  renew = async (url: string, userInfo: Login) => {
    return await axios.post(url, userInfo)
      .then((res) => res)
      .catch((err) => err); 
  };

  editPersonalData = async (url: string, personal: PersonalData, userToken: string) => {
    return axios.put<void>(url, personal, {
      headers: {
        Authorization: `${userToken}`
      }
    })
      .then((res) => res)
      .catch((err) => err);
  };

  editAddressData = async (url: string, adress: UserAddress, userToken: string) => {
    return axios.put<void>(url, adress, {
      headers: {
        Authorization: `${userToken}`
      }
    })
      .then((res) => res)
      .catch((err) => err);
  };

  editEmailData = async (url: string, emailModel: EditEmail, userToken: string) => {
    return axios.put<void>(url, emailModel, {
      headers: {
        Authorization: `${userToken}`
      }
    })
      .then((res) => res)
      .catch((err) => err);
  };
}

export default AuthService;