import {Category} from "../types/category";
import React from "react";
import Link from "next/link";
import Container from "./container";
import styles from "../styles/category.module.scss";

type AvatarCategoryContainerProps = {
    category: Category
}


const AvatarCategoryContainer: React.FC<AvatarCategoryContainerProps> = ({category}) => {
    return (
        <>
            <Container>
                <Link href={`/category/${category._id}`}>
                    <div style={{
                        backgroundImage: `url(${category.imageUrl})`,
                        height: "170px",
                        width: "140px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        <div style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            width: "130px",
                            borderTopLeftRadius: "5px",
                            borderBottomRightRadius: "5px"
                        }}>
                            <h3 className={styles.title}>{category.name}</h3>
                        </div>
                    </div>
                </Link>
            </Container>
        </>
    )
}

export default AvatarCategoryContainer;