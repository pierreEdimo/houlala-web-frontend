import type {NextPage} from 'next'
import {HomeCategoryList} from "../components/home.category.list";
import {HomeProductList} from "../components/home.product.list";
import {HomeLocationList} from "../components/home.location.list";
import {NestedLayout} from "../components/nested.layout";


const Home: NextPage = () => {
    return (
        <div>
            <main>
                <NestedLayout>
                    <HomeCategoryList/>
                    <br/>
                    <br/>
                    <br/>
                    <HomeProductList/>
                    <br/>
                    <br/>
                    <br/>
                    <HomeLocationList/>
                </NestedLayout>
            </main>
        </div>
    )
}

export default Home
