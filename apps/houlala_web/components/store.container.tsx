import React from "react";
import BackButton from "./back.button";
import LocationList from "./location.list";
import DiscoveryCategoryList from "./discovery.category.list";

type StoreContainerProps = {
    categoryId: string;
    categoryName: string;
}


const StoreContainer: React.FC<StoreContainerProps> = ({categoryId, categoryName}: {
    categoryId: string,
    categoryName: string
}) => {
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    return (
        <>
            <BackButton title={`Decouvrez nos ${categoryName} par categorie`}/>
            <DiscoveryCategoryList/>
            <div style={{height: "20px"}}></div>
            <h2>Quelques Magasins</h2>
            <LocationList url={`${LOCATION_URL}/store?limit=10`}/>
        </>
    )
}

export default StoreContainer
;