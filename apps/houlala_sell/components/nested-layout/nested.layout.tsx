import React from "react";
import { InnerLayout, Row } from "ui";
import SideBarWrapper from "../sidebar-wrapper/side.bar.wrapper";
import styles from "./nested.module.scss";
import { useLocation } from "../../hooks/location.hooks";

type Props = {
  children: React.ReactNode
}




const NestedLayout: React.FC<Props> = ({ children }) => {

  const {
    location,
    error,
    isLoading
  } = useLocation(`${process.env.NEXT_PUBLIC_LOCATION_URL}/users/27d54546-5c23-40b3-be65-6701f89e4d9b`);

  if (isLoading) {
    return (
      <div>
        ...Loading
      </div>
    );
  }

  if (error) {
    return (
      <div>
        ...Error
      </div>
    );
  }


  return (
    <Row>
      <SideBarWrapper location={location!} />
      <div className={styles.main}>
        <div className={styles.mainBody}>
          <InnerLayout>
            {children}
          </InnerLayout>
        </div>
      </div>
    </Row>
  );
};

export default NestedLayout;