import { useNavigate } from "react-router-dom"
import { post } from "../../interface/interface"
import { FeedImage, FeedInfoBox, FeedReactionBox, FeedReactionIcon, FeedTitle, FeedWrapper } from "../../styles/bestTab/FeedBox"

function FeedBox(props: post) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/best/best_tab", { state: {...props}});
    }

    return (
        <FeedWrapper onClick={handleClick}>
            <FeedImage src={props.image} alt="image"/>
            <FeedInfoBox>
                <FeedTitle>{props.title}</FeedTitle>
                <FeedReactionBox>
                    <div>
                        <FeedReactionIcon src="/ic-hands-clap.png" alt="like" />
                        <span>{props.like}</span>
                    </div>
                    <div>
                        <FeedReactionIcon src="/ic-ellipsis-message.png" alt="comment" />
                        <span>{props.comment}</span>
                    </div>
                </FeedReactionBox>
            </FeedInfoBox>
        </FeedWrapper>
    )
}

export default FeedBox