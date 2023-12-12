import {NextPage} from "next";
import {useRouter} from "next/router";
import {NestedLayout} from "../../components/layout/mainlayout/nested.layout";
import CategoryDetail from "../../components/detail/category/category.detail";


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