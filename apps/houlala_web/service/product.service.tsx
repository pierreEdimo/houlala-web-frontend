import axios from "axios";

class ProductService {
    bookMarkProduct = async (url: string) => {
        return await axios.post<void>(url)
            .then((res) => res)
            .catch((err) => err);
    }
}

export default ProductService;