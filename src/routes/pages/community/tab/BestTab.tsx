import FeedBox from "../../../../components/best/FeedBox";
import { post } from "../../../../interface/interface";
import { ContentContainer } from "../../../../styles/bestTab/BestTab"
import { useLoaderData } from "react-router-dom"

function BestTab() {

    const posts = useLoaderData().data;

    return (
        <ContentContainer>
            {posts.map((post: post) => {
                return <FeedBox {...post} />
            })}
        </ContentContainer>
    )
}

export default BestTab