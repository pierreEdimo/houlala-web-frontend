import axios from "axios";
import useSWR from "swr";
import {Order} from "../types/order";

function useCartItemList(cartItemUrl: string) {
    const fetcher = async (url: string) => await axios.get<Order[]>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Order[]>(cartItemUrl, fetcher);
    return {
        items: data,
        isLoading,
        isError: error
    };
}

export {useCartItemList}