import { useLocation } from "react-router-dom"
import TitleBar from "@/components/TitleBar"
import { PostCardsContainer } from "@/styles/bestTab/PostCard";
import {MemoizedPostCard} from "@/components/best/PostCard";

function BestPostDetail() {

    const title = "활동 자세히 보기"
    const location = useLocation();
    const post = location.state;

    return (
        <>
            <TitleBar title={title}/>
            <PostCardsContainer>
                <MemoizedPostCard {...post} />
            </PostCardsContainer>
        </>
    )
}

export default BestPostDetail