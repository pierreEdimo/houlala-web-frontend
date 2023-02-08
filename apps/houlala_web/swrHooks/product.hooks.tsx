import axios from "axios";
import useSWR, {mutate} from "swr";
import {Product} from "../types/product";


function useProductList(productUrl: string) {
    const fetcher = async (url: string) => await axios.get<Product[]>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Product[]>(productUrl, fetcher);
    return {
        products: data,
        isLoading,
        isError: error
    };
}

function useProduct(productUrl: string) {
    const fetcher = async (url: string) => await axios.get<Product>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Product>(productUrl, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    return {
        product: data,
        isLoading,
        isError: error
    };
}

export {useProductList, useProduct}; 