import {NextPage} from "next";
import {useRouter} from "next/router";
import {NestedLayout} from "../../components/nested.layout";
import CategoryDetail from "../../components/category.detail";


const Category: NextPage = () => {
    const router = useRouter();
    const {cid} = router.query;

    return (
        <>
            <NestedLayout>
                <CategoryDetail categoryId={`${cid}`}/>
            </NestedLayout>
        </>
    )
}

export default Category;