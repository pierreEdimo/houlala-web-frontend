import {NextPage} from "next";
import {useRouter} from "next/router";
import {NestedLayout} from "../../components/nested.layout";
import {useCategory} from "../../swrHooks/discovery.category.hooks";
import BackButton from "../../components/back.button";
import LocationList from "../../components/location.list";
import { HoulalaSpinner } from "ui";

const StoreCategory: NextPage = () => {
    const router = useRouter();
    const {sid} = router.query;
    const CATEGORY_URL = process.env.NEXT_PUBLIC_DISCOVERY_CATEGORY_URL;
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const {category, isError, isLoading} = useCategory(`${CATEGORY_URL}/${sid}`);

    if (isLoading) return (
        <>
            <HoulalaSpinner/>
        </>
    )

    if (isError) return <div>...Error</div>

    return (
        <>
            <NestedLayout>
                <BackButton title={`${category?.name}`}/>
                <LocationList url={`${LOCATION_URL}/category/${category?.id}`}/>
            </NestedLayout>
        </>
    )
}

export default StoreCategory;