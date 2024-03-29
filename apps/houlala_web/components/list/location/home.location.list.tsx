import {HorizontalLocationContainer} from "../../ui-container/location/horizontal.location.container";
import styles from "../../../styles/location.module.scss";
import {useLocationList} from "../../../swrHooks/location.hooks";
import { HoulalaSpinner } from "ui";

export function HomeLocationList() {
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const {locations, isError, isLoading} = useLocationList(`${LOCATION_URL}/store`);

    if (isLoading) return (
        <div>
            <HoulalaSpinner/>
        </div>
    )

    if (isError) return (
        <div>
            ...Error
        </div>
    )

    return (
        <div>
            <h2>Magasins</h2>
            <div className={styles.horizontalList}>
                {
                    locations?.map((location) => (
                        <HorizontalLocationContainer key={location.id} location={location}/>
                    ))
                }
            </div>
        </div>
    );
}

export {}