import { NextPage } from "next";
import { NestedLayout } from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import { useRouter } from "next/router";
import { useLocation } from "../../swrHooks/location.hooks";
import styles from "../../styles/location.module.scss";
import LocationHome from "../../components/location.home";
import LocationInfo from "../../components/location.info";
import LocationProduct from "../../components/location.product";
import Avatar from "../../components/avatar";
import SearchBox from "../../components/search.box";
import { useRecoilState } from "recoil";
import SearchFormState from "../../state/search.atoms";
import { SearchForm } from "../../types/search.form";
import { HoulalaSpinner } from "ui/components/loading-spinner/houlala-spinner";
import { TabBody, TabHeader, TabItem, TabView } from "ui";
import { useState } from "react";

const Location: NextPage = () => {
  const router = useRouter();
  const { lid } = router.query;
  const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;
  const [formData] = useRecoilState(SearchFormState);
  const [currentIndex, setIndex] = useState<number>(0);
  const { location, isLoading, isError } = useLocation(`${LOCATION_URL}/${lid}`);
  const menuItems = ["Accueil", "Info", "Produits"];

  const handleSummit = (event: any) => {
    event.preventDefault();
    const data: SearchForm = {
      word: event.target.word.value
    };
    router.push(`result?word=${data.word}&locationId=${location?.id}`)
      .then();
  };

  if (isLoading) return (
    <>
      <HoulalaSpinner />
    </>
  );

  if (isError) return (
    <div>
      ....Error
    </div>
  );

  return (
    <>
      <NestedLayout>
        <BackButton title={`${location?.name}`} />
        <div className={styles.locationHeaderContainer}>
          <div className={styles.imageContainer}>
            <Avatar imageUrl={location?.imageUrl!} type={"avatar"} />
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
              {
                menuItems.map((item, index) => (
                  <TabItem
                    style={{ borderBottom: currentIndex === index ? "2px solid orange" : "", cursor: "pointer" }}>
                    <div onClick={() => setIndex(index)}>
                      <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>{item}</p>
                    </div>
                  </TabItem>
                ))
              }
            </TabHeader>
            <div className={styles.innerSearch}>
              <SearchBox onSubmit={handleSummit}
                         value={formData.word}
                         name={"word"} />
            </div>
          </div>
          <TabBody currentIndex={currentIndex}>
            <TabItem>
              <LocationHome location={location!} />
            </TabItem>
            <TabItem>
              <LocationInfo location={location!} />
            </TabItem>
            <TabItem>
              <LocationProduct location={location!} />
            </TabItem>
          </TabBody>
        </TabView>
      </NestedLayout>
    </>
  );
};

export default Location;