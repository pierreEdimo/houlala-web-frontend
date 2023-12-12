import { Category } from "../../../types/category";
import React from "react";
import Container from "../../container/container";
import styles from "../../../styles/category.module.scss";
import { useRouter } from "next/router";
import { HoulalaCard } from "ui";

type AvatarCategoryContainerProps = {
  category: Category;
};

const AvatarCategoryContainer: React.FC<AvatarCategoryContainerProps> = ({
  category,
}) => {
  const router = useRouter();
  return (
    <>
      <Container>
        <button
          onClick={() => router.push(`/category/${category.id}`)}
          style={{
            background: "transparent",
            border: "none",
            padding: "0",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <HoulalaCard style={{ border: "none" }}>
            <div
              className={styles.homeCategoryItem}
              style={{
                backgroundImage: `url(${category.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  width: "130px",
                  borderTopLeftRadius: "0.3rem",
                  borderBottomRightRadius: "0.3rem",
                }}
              >
                <h3 className={styles.title}>{category.name}</h3>
              </div>
            </div>
          </HoulalaCard>
        </button>
      </Container>
    </>
  );
};

export default AvatarCategoryContainer;
