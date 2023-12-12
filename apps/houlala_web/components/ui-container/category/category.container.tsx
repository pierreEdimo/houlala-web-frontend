import {Category} from "../types/category";
import styles from "../styles/category.module.scss";
import Container from "./container/container";
import Link from "next/link";
import Avatar from "./avatar";
import React from "react";

type CategoryContainerProps = {
    category: Category
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({category}: { category: Category }) => {
    return (
        <>
            <Container>
                <Link href={`/category/${category.id}`}>
                    <div style={{cursor: "pointer"}}>
                        <div className={styles.avatarContainer}>
                            <Avatar imageUrl={category.imageUrl} type={"thumbnail"}/>
                        </div>
                        <h3 className={styles.title}>{category.name}</h3>
                    </div>
                </Link>
            </Container>
        </>
    )
}

export default CategoryContainer;