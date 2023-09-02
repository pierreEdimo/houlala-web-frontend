import type { NextPage } from "next";
import { HomeCategoryList } from "../components/home.category.list";
import { HomeProductList } from "../components/home.product.list";
import { HomeLocationList } from "../components/home.location.list";
import { NestedLayout } from "../components/nested.layout";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <NestedLayout>
          <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
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
