import ReactMarkdown from "react-markdown";
import ProductGrid from "../../grid/product.grid";
import React from "react"; 
import { Location } from "../../../types/location";

type LocationHomeProps = {
    location: Location
}


const LocationHome: React.FC<LocationHomeProps> = ({location}) => {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    return (
        <>
            <h2>A Propos</h2>
            <div style={{height: "1rem"}}></div>
            <ReactMarkdown>
                {location?.shortDescription!}
            </ReactMarkdown>
            <div style={{height: "1rem"}}></div>
            <h2>{`Quelques produits par ${location.name}`}</h2>
            <ProductGrid url={`${PRODUCT_URL}/locations/${location?.uniqueIdentifier}/size/6`}/>
        </>
    )
}

export default LocationHome;