import { useLocation } from "react-router-dom"
import TitleBar from "../../../components/TitleBar"
import { PostCardsContainer } from "../../../styles/bestTab/PostCard";
import PostCard from "../../../components/best/PostCard";

function BestPostDetail() {

    const title = "활동 자세히 보기"
    const location = useLocation();
    const post = location.state;

    return (
        <>
            <TitleBar title={title}/>
            <PostCardsContainer>
                <PostCard {...post} />
            </PostCardsContainer>
        </>
    )
}

export default BestPostDetail