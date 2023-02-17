import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import {useRouter} from "next/router";
import {useLocation} from "../../swrHooks/location.hooks";
import Spinner from "../../components/spinner";
import TabView from "../../components/tab.view";
import TabHeader from "../../components/tab.header";
import Tab from "../../components/tab";
import styles from "../../styles/location.module.scss";
import TabBody from "../../components/tab.body";
import LocationHome from "../../components/location.home";
import LocationInfo from "../../components/location.info";
import LocationProduct from "../../components/location.product";
import Avatar from "../../components/avatar";
import SearchBox from "../../components/search.box";
import {useRecoilState} from "recoil";
import SearchFormState from "../../state/search.atoms";
import {SearchForm} from "../../types/search.form";

const Location: NextPage = () => {
    const router = useRouter();
    const {lid} = router.query;
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const [formData] = useRecoilState(SearchFormState);

    const {location, isLoading, isError} = useLocation(`${LOCATION_URL}/${lid}`);

    const handleSummit = (event: any) => {
        event.preventDefault();
        const data: SearchForm = {
            word: event.target.word.value
        }
        router.push(`result?word=${data.word}&locationId=${location?.id}`)
            .then();
    }

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return (
        <div>
            ....Error
        </div>
    )

    return (
        <>
            <NestedLayout>
                <BackButton title={`${location?.name}`}/>
                <div className={styles.locationHeaderContainer}>
                    <div className={styles.imageContainer}>
                        <Avatar imageUrl={location?.imageUrl!} type={"avatar"}/>
                    </div>
                    <div>
                        <h2 className={styles.locationTitle}>{location?.name}</h2>
                        <div className={styles.keyFigures}>
                            <p>{`${location?.productTotalCount} produits disponibles`}</p>
                            <p>{`${location?.orderSoldCount} produits vendus`}</p>
                        </div>
                    </div>
                </div>
                <TabView>
                    <div className={styles.tabHeaderContainer}>
                        <TabHeader>
                            <Tab>Accueil</Tab>
                            <Tab>Info</Tab>
                            <Tab>Produits</Tab>
                        </TabHeader>
                        <div className={styles.innerSearch}>
                            <SearchBox onSubmit={handleSummit}
                                       value={formData.word}
                                       name={"word"}/>
                        </div>
                    </div>
                    <TabBody>
                        <LocationHome location={location!}/>
                        <LocationInfo location={location!}/>
                        <LocationProduct location={location!}/>
                    </TabBody>
                </TabView>
            </NestedLayout>
        </>
    )
}

export default Location;