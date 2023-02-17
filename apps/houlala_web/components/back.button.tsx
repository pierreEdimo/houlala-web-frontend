import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

type BackButtonProps = {
    title: string
}

const BackButton: React.FC<BackButtonProps> = ({title}: { title: string }) => {
    const router = useRouter();
    return (
        <>
            <div
                onClick={() => router.back()}
                style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    cursor: "pointer"
                }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: "20px"}}/>
                <h3>{title}</h3>
            </div
            >
        </>
    )
}

export default BackButton;