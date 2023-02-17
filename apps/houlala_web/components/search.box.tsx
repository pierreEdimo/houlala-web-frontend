import React from "react";
import styles from "../styles/search.module.scss";
import search from "../public/images/search.png";
import Image from "next/image";


type SearchFormProps = {
    onSubmit?: any;
    name?: string;
    value?: string;
}

const SearchBox: React.FC<SearchFormProps> = ({onSubmit, name, value}) => {
    return (
        <form className={styles.searchContainer} onSubmit={onSubmit}>
            <input
                type={"search"}
                name={name}
                value={value}
                placeholder={"Recherche"}
                required
                className={styles.textSearch}
            />
            <button type={"submit"} className={styles.searchButton}>
               <Image src={search} width={15} height={15} alt={"search-image"} />
            </button>
        </form>
    )
}

export default SearchBox;