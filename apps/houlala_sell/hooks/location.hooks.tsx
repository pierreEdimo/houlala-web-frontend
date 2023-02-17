import axios from "axios";
import useSWR from "swr";
import { LocationModel } from "../types/locationModel";

function useLocation(locationUrl: string) {
  const fetcher = async (url: string) => await axios.get<LocationModel>(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR<LocationModel>(locationUrl, fetcher);
  return {
    location: data,
    isLoading,
    error
  };
}

export {useLocation}
