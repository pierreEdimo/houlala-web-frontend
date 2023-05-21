import {useRouter} from "next/router";
import React, {useCallback, useEffect} from "react";
import {useRecoilState} from "recoil";
import {PreviewState} from "../state/preview.state";
import SearchFormState from "../state/search.atoms";
import {SearchForm} from "../types/search.form";
import SearchBox from "./search.box";

type NavSearchProps = {}

const NavSearch: React.FC<NavSearchProps> = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(PreviewState);
    const [formData] = useRecoilState(SearchFormState);

    const showPreview = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
        if (!isOpen) {
            document.getElementById("searchComponent")!.style.display = "block";
            setIsOpen(true);
        }
    }, [isOpen, setIsOpen]);


    useEffect(() => {
        window.onclick = () => {
            if (isOpen) {
                document.getElementById("searchComponent")!.style.display = "none";
                setIsOpen(false);
            }
        };
    })

    const handleSummit = (event: any) => {
        event.preventDefault();
        const data: SearchForm = {
            word: event.target.word.value
        }
        router.push(`/search-result/${data.word}`).then();
    }

    return (
       <div style={{width: "380px"}}> 
           <SearchBox onSubmit={handleSummit}
               value={formData.word}
               name={"word"}/>
       </div>
    )
}

export default NavSearch