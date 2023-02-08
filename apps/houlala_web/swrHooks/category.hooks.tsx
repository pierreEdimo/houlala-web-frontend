import axios from "axios";
import useSWR from "swr";
import {Category} from "../types/category";

function useCategoryList(categoryUrl: string) {
    const fetcher = async (url: string) => await axios.get<Category[]>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Category[]>(categoryUrl, fetcher);
    return {
        categories: data,
        isLoading,
        isError: error
    };
}

function useCategory(categoryUrl: string) {
    const fetcher = async (url: string) => await axios.get<Category>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Category>(categoryUrl, fetcher);
    return {
        category: data,
        isLoading,
        isError: error
    };
}

export {useCategoryList, useCategory}; 