import ReactMarkdown from "react-markdown";
import ProductGrid from "./product.grid";
import {Location} from "../types/location";
import React from "react"; 

type LocationHomeProps = {
    location: Location
}


const LocationHome: React.FC<LocationHomeProps> = ({location}) => {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    return (
        <>
            <div style={{height: "10px"}}></div>
            <h2>A Propos</h2>
            <div style={{height: "10px"}}></div>
            <ReactMarkdown>
                {location?.shortDescription!}
            </ReactMarkdown>
            <div style={{height: "20px"}}></div>
            <h2>{`Quelques produit par ${location.name}`}</h2>
            <ProductGrid url={`${PRODUCT_URL}/random/location/${location?.uniqueIdentifier}?size=20`}/>
        </>
    )
}

export default LocationHome;