import {NextPage} from "next"
import {NestedLayout} from "../../components/layout/mainlayout/nested.layout";
import {CategoryGrid} from "../../components/grid/category.grid";
import styles from "../../styles/category.module.scss";
import BackButton from "../../components/back-button/back.button";

const Index: NextPage = () => {
    return (
        <div>
            <NestedLayout>
                <div>
                    <h2 className={styles.categoryTitle}>Decouvrez nos produits par Categorie</h2>
                    <div className={styles.backButtonContainer}>
                        <BackButton title={"Categorie"}/>
                    </div>
                </div>
                <CategoryGrid/>
            </NestedLayout>
        </div>
    )
}


export default Index;