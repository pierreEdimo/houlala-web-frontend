import {Category} from "../types/category";
import Avatar from "./avatar";
import styles from "../styles/category.module.scss";
import React from "react";
import Container from "./container";
import Link from "next/link";

type GridCategoryContainerProps = {
    category: Category
}

const GridCategoryContainer: React.FC<GridCategoryContainerProps> = ({category}: { category: Category }) => {
    return (
        <>
            <Container>
                <Link href={`/category/${category._id}`}>
                    <div className={styles.categoryContainer}>
                        <div className={styles.blur}>
                            <h3 className={styles.title}>{category.name}</h3>
                        </div>
                        <Avatar index={-1} imageUrl={category.imageUrl} type={"thumbnail"}/>
                    </div>
                </Link>
            </Container>

        </>

    );
}

export default GridCategoryContainer;