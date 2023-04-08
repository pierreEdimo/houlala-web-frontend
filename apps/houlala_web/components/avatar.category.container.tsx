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
                    <div className={styles.homeCategoryItem} style={{
                        backgroundImage: `url(${category.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                        <div style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            width: "130px",
                            borderTopLeftRadius: "0.3rem",
                            borderBottomRightRadius: "0.3rem"
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