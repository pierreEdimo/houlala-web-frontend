import {NextPage} from "next";
import {NestedLayout} from "../../components/layout/mainlayout/nested.layout";
import BackButton from "../../components/back-button/back.button";
import {useRouter} from "next/router";
import SearchProducts from "../../components/search/product/search.products";
import SearchLocations from "../../components/search/location/search.locations";
import SearchCategories from "../../components/search/category/search.categories";
import SearchEmptyResult from "../../components/search/result/search.empty.result";

const SearchResult: NextPage = () => {
    const router = useRouter();
    const {wrd} = router.query;
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;

    return (
        <>
            <NestedLayout>
                <BackButton title={"Resultats"}/>
                <div style={{height: "10px"}}></div>
                <p>Resultats et suggestions pour la recherche <b>{wrd}</b></p>
                <div style={{height: "10px"}}></div>
                <SearchProducts url={`${PRODUCT_URL}/search?word=${wrd}`}/>
                <div style={{height: "20px"}}></div>
                <SearchCategories url={`${CATEGORY_URL}/search?searchWord=${wrd}`}/>
                <div style={{height: "20px"}}></div>
                <SearchLocations url={`${LOCATION_URL}/search?word=${wrd}`}/>
                <SearchEmptyResult productUrl={`${PRODUCT_URL}/search?word=${wrd}`}
                                   locationUrl={`${LOCATION_URL}/search?word=${wrd}`}
                                   categoryUrl={`${CATEGORY_URL}/search?searchWord=${wrd}`}/>
            </NestedLayout>
        </>
    )
}

export default SearchResult; 