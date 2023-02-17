import axios from "axios";
import SubCategory from "../types/sub.category";
import useSWR from "swr";

function useSubCategoryList(categoryUrl: string) {
    const fetcher = async (url: string) => await axios.get<SubCategory[]>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<SubCategory[]>(categoryUrl, fetcher);
    return {
        categories: data,
        isLoading,
        isError: error
    };
}

function useSubCategory(categoryUrl: string) {
    const fetcher = async (url: string) => await axios.get<SubCategory>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<SubCategory>(categoryUrl, fetcher);
    return {
        category: data,
        isLoading,
        isError: error
    };
}

export {useSubCategoryList, useSubCategory}; 