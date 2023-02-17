import axios from "axios";
import useSWR from "swr";
import { Product } from "../types/product";

function useProductList(productUrl: string) {
  const fetcher = async (url: string) => await axios.get<Product[]>(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR<Product[]>(productUrl, fetcher);
  return {
    products: data,
    isLoading,
    error
  };
}

export { useProductList };