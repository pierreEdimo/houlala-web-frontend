import React from "react";
import {useRouter} from "next/router";
import { SearchForm } from "../types/search.form";
import { useRecoilState } from "recoil";
import SearchFormState from "../state/search.atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/search.module.scss"; 

type MobileNavSearchProps = {}

const MobileNavSearch: React.FC<MobileNavSearchProps> = () => {
    const router = useRouter();
    const [formSata, setFormData] = useRecoilState(SearchFormState);

    const handleSubnmit = (event: any) => {
        event.preventDefault();
        const data: SearchForm = {
            word: event.target.word.value
        }
        router.push(`/search-result/${data.word}`).then();
    }

    return (
            <form onSubmit={handleSubnmit} className={styles.appBarForm}>
                <input
                    name={"word"}
                    type={"search"}
                    placeholder={"rechercher"}
                    value={formSata.word}
                    required
                />
                <button>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
    )
}

export default MobileNavSearch;