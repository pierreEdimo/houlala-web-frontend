import axios from "axios";
import useSWR from "swr";
import {DiscoveryCategory} from "../types/discovery.category";

function useCategoryList(categoryUrl: string) {
    const fetcher = async (url: string) => await axios.get<DiscoveryCategory[]>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<DiscoveryCategory[]>(categoryUrl, fetcher);
    return {
        categories: data,
        isLoading,
        isError: error
    };
}

function useCategory(categoryUrl: string) {
    const fetcher = async (url: string) => await axios.get<DiscoveryCategory>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<DiscoveryCategory>(categoryUrl, fetcher);
    return {
        category: data,
        isLoading,
        isError: error
    };
}

export {useCategoryList, useCategory};