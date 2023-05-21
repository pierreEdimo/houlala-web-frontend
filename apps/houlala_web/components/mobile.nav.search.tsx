import React from "react";
import { useRouter } from "next/router";
import { SearchForm } from "../types/search.form";
import { useRecoilState } from "recoil";
import SearchFormState from "../state/search.atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/search.module.scss";
import { HoulalaCard } from "ui";

type MobileNavSearchProps = {};

const MobileNavSearch: React.FC<MobileNavSearchProps> = () => {
  const router = useRouter();
  const [formSata, setFormData] = useRecoilState(SearchFormState);

  const handleSubnmit = (event: any) => {
    event.preventDefault();
    const data: SearchForm = {
      word: event.target.word.value,
    };
    router.push(`/search-result/${data.word}`).then();
  };

  return (
    <form onSubmit={handleSubnmit} className={styles.appBarForm}>
      <HoulalaCard style={{
          borderRadius: "25px",
          display: "flex",
          width: "100%",
          padding: "5px",
          alignItems: "center"
      }}>
        <input
          name={"word"}
          type={"search"}
          placeholder={"rechercher"}
          value={formSata.word}
          required
        />
        <button style={{background: "#f3f3f3"}} className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </HoulalaCard>
    </form>
  );
};

export default MobileNavSearch;
