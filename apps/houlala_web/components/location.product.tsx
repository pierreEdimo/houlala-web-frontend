import {Location} from "../types/location";
import React from "react";
import ProductGrid from "./product.grid";

type LocationProductProps = {
    location: Location
}

const LocationProduct: React.FC<LocationProductProps> = ({location}) => {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    return (
        <>
            <div style={{height: "10px"}}></div>
            <ProductGrid url={`${PRODUCT_URL}/location/${location?.uniqueIdentifier}?limit=0`}/>
        </>
    )
}

export default LocationProduct;