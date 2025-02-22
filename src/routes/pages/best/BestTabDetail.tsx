import { useLoaderData, useLocation } from "react-router-dom";
import TitleBar from "../../../components/TitleBar"
import PostCard from "../../../components/best/PostCard";
import { post } from "../../../interface/interface";
import { PostCardsContainer } from "../../../styles/bestTab/PostCard";

function BestTabDetail() {

    const title = "인기탭";
    const posts = useLoaderData().data;
    const location = useLocation();
    const clickedPost = location.state;
    posts.unshift(clickedPost);



    return (
        <>
            <TitleBar title={title}/>
            <PostCardsContainer>
                {posts.map((post: post) => {
                    return <PostCard {...post} />
                })}
            </PostCardsContainer>
        </>
    )
}

export default BestTabDetail