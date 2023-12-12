import type { NextPage } from "next";
import { HomeCategoryList } from "../components/list/category/home.category.list";
import { HomeProductList } from "../components/list/location/home.product.list";
import { HomeLocationList } from "../components/list/location/home.location.list";
import { NestedLayout } from "../components/layout/mainlayout/nested.layout";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <NestedLayout>
          <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
            <HomeCategoryList />
            <HomeProductList />
            <HomeLocationList />
          </div>
        </NestedLayout>
      </main>
    </div>
  );
};

export default Home;
