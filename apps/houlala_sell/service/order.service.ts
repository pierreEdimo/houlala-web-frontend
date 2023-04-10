import axios from "axios";

class OrderService {
    updateStatus = async (url: string) => {
        return await axios.put<void>(url)
            .then((res) => res)
            .catch((err) => err);
    };
}

export default OrderService; 