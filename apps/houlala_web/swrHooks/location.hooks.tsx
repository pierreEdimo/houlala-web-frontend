import axios from "axios";
import useSWR from "swr";
import {Location} from "../types/location";

function useLocationList(locationUrl: string) {
    const fetcher = async (url: string) => await axios.get<Location[]>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Location[]>(locationUrl, fetcher);
    return {
        locations: data,
        isLoading,
        isError: error,
    };
}

function useLocation(locationUrl: string) {
    const fetcher = async (url: string) => await axios.get<Location>(url).then((res) => res.data);
    const {data, error, isLoading} = useSWR<Location>(locationUrl, fetcher);
    return {
        location: data,
        isLoading,
        isError: error
    };
}

export {useLocationList, useLocation}; 