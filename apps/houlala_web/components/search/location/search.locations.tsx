import React from "react";
import { useLocationList } from "../../../swrHooks/location.hooks";
import VerticalLocationContainer from "../../ui-container/location/vertical.location.container";
import { HoulalaSpinner } from "ui";

type SearchLocationsProps = {
  url: string;
}

const SearchLocations: React.FC<SearchLocationsProps> = ({ url }) => {
  const { locations, isLoading, isError } = useLocationList(url);

  if (isLoading) return (
    <>
      <HoulalaSpinner />
    </>
  );

  if (isError) return (
    <>
      <div>..Error</div>
    </>
  );

  return (
    <>
      <div>
        {
          locations?.length! < 1 ?
            <div></div> :
            <div>
              <h2>Locations</h2>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}>
                {
                  locations?.map((location) =>
                    <VerticalLocationContainer key={location.id} location={location} />)
                }
              </div>
            </div>
        }
      </div>
    </>
  );
};

export default SearchLocations;