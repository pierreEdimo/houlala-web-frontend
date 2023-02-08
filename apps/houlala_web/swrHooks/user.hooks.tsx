import axios from "axios";
import useSWR from "swr";
import {UserInformation} from "../types/user.information";

function useUserInfo(authUrl: string, userToken: string) {
    const fetcher = async (url: string) => await axios.get<UserInformation>(url, {
        headers: {
            Authorization: `${userToken}`
        }
    }).then((res) => res.data);
    const {data, error, isLoading} = useSWR<UserInformation>(authUrl, fetcher);
    return {
        user: data,
        isLoading,
        isError: error
    };
}

export {useUserInfo};