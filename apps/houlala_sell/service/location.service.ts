import axios from "axios";
import { EditLocation } from "../types/edit.location";
import { LocationModel } from "../types/locationModel";

class LocationService {
    editLocation = async (url: string, location: EditLocation) => {
        return await axios.put<void>(url, location)
            .then((res) => res)
            .catch((err) => err);
    };
}

export default LocationService; 