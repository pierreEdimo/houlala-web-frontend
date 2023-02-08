import {atom} from "recoil";
import {SearchForm} from "../types/search.form";

const SearchFormState = atom({
    key: "search",
    default: {} as SearchForm
});

export default SearchFormState;