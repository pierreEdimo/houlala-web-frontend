import { Category } from "../types/category";
import Avatar from "./avatar";
import styles from "../styles/category.module.scss";
import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { HoulalaCard } from "ui";
import { useRouter } from "next/router";

type GridCategoryContainerProps = {
  category: Category;
};

const GridCategoryContainer: React.FC<GridCategoryContainerProps> = ({
  category,
}: {
  category: Category;
}) => {
  const router = useRouter();
  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        padding: "0",
        fontFamily: "Poppins, sans-serif",
      }}
      onClick={() => router.push(`/category/${category._id}`)}
    >
      <Container>
        <HoulalaCard style={{ border: "none" }}>
          <div className={styles.categoryContainer}>
            <div className={styles.blur}>
              <h3 className={styles.title}>{category.name}</h3>
            </div>
            <Image
              src={category.imageUrl}
              layout={"fill"}
              objectFit={"cover"}
              style={{ borderRadius: "5px" }}
            />
          </div>
        </HoulalaCard>
      </Container>
    </button>
  );
};

export default GridCategoryContainer;
