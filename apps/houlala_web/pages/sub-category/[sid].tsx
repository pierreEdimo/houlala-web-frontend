import {NextPage} from "next";
import {useRouter} from "next/router";
import {NestedLayout} from "../../components/layout/mainlayout/nested.layout";
import SubCategoryDetail from "../../components/detail/sub-category/sub.category.detail";

const SubCategory: NextPage = () => {
    const router = useRouter();
    const {sid} = router.query;


    return (
        <>
            <NestedLayout>
                <SubCategoryDetail categoryId={Number(sid)}/>
            </NestedLayout>
        </>

    )
}

export default SubCategory;