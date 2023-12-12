import { Location } from "../../../types/location";
import React from "react";
import ProductGrid from "../../grid/product.grid";

type LocationProductProps = {
    location: Location
}

const LocationProduct: React.FC<LocationProductProps> = ({ location }) => {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    return (
        <>
            <ProductGrid url={`${PRODUCT_URL}/locations/${location?.uniqueIdentifier}/size/0`} />
        </>
    );
};

export default LocationProduct;