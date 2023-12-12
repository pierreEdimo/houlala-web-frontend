import React from "react";
import styles from "../../../styles/search.module.scss";
import search from "../../../public/images/search.png";
import Image from "next/image";
import { HoulalaCard } from "ui";

type SearchFormProps = {
  onSubmit?: any;
  name?: string;
  value?: string;
};

const SearchBox: React.FC<SearchFormProps> = ({ onSubmit, name, value }) => {
  return (
    <form className={styles.searchContainer} onSubmit={onSubmit}>
      <HoulalaCard
        style={{
          width: "100%",
          display: "flex",
          padding: "5px",
          borderRadius: "25px",
          alignItems: "center",
        }}
      >
        <input
          type={"search"}
          name={name}
          value={value}
          placeholder={"Recherche"}
          required
          className={styles.textSearch}
        />
        <button type={"submit"} className={styles.searchButton}>
          <Image src={search} width={13} height={13} alt={"search-image"} />
        </button>
      </HoulalaCard>
    </form>
  );
};

export default SearchBox;
