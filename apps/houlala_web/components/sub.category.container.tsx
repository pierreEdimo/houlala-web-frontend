import React from "react";
import styles from "../styles/sub.category.module.scss";
import { Card } from "./card";
import Avatar from "./avatar";

type SubCategoryContainerProps = {
  label: string;
  thumbNailUrl: string;
  onClick: () => void
}

const SubCategoryContainer: React.FC<SubCategoryContainerProps> = ({ label, thumbNailUrl, onClick }) => {
  return (
    <>
      <Card>
        <div onClick={onClick} className={styles.subCategoryContainer}>
          <Avatar imageUrl={thumbNailUrl} type={"avatar"} />
          <h3>{label}</h3>
        </div>
      </Card>
    </>
  );
};

export default SubCategoryContainer;