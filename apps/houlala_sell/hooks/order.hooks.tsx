import axios from "axios";
import useSWR from "swr";
import { Order } from "../types/order";

function useOrderList(orderUrl: string) {
  const fetcher = async (url: string) => await axios.get<Order[]>(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR<Order[]>(orderUrl, fetcher);
  return {
    orders: data,
    isLoading,
    error
  };
}

export { useOrderList };