import axios from "axios";
import { UserInformation } from "../types/user.information";
import useSWR from "swr";

function useUserInfo(authUrl: string, userToken: string) {
    const fetcher = async (url: string) => await axios.get<UserInformation>(url,
        {
            headers: {
                Authorization: `${userToken}`
            }
        }
    ).then((res) => res.data);
    const { data, error, isLoading } = useSWR<UserInformation>(authUrl, fetcher);
    return {
        userInfo: data,
        isLoading,
        error
    }
}

export { useUserInfo }; 