import { useNavigate } from "react-router-dom"
import { post } from "../../interface/interface"
import { CreatedAt, PostReactionBox, PostReactionBtnBox, PostTop, PostUserInfo, PostWrapper, UserId, UserProfile } from "../../styles/bestTab/PostCard"
import { FollowButton } from "../FollowButton"

function PostCard(props: post) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/best/detail/${props.id}`, {state: {...props}});
    }
    const handleClickLike = () => {
        navigate(`/best/detail/${props.id}/likes`, {state: {post_id: props.id}});
    }

    return (
        <PostWrapper>
            <PostTop>
                <PostUserInfo>
                    <UserProfile>
                        <img src="/sample-image.jpeg" alt="user profile image"/>
                        <div>
                            <UserId>{props.user_id}</UserId>
                            <CreatedAt>7분 전</CreatedAt>
                        </div>
                    </UserProfile>
                    <FollowButton>팔로우</FollowButton>
                </PostUserInfo>
                <span>{props.content}</span>
            </PostTop>
            <img onClick={handleClick} src={props.image} alt="post image"/>
            <PostReactionBox>
                <button onClick={handleClickLike}>{props.like === 0 ? "처음으로 박수를 보내보세요!" : `${props.like}명이 박수를 보냈어요`}</button>
                <button>댓글 <span>{props.comment}</span>개</button>
            </PostReactionBox>
            <PostReactionBtnBox>
                <button><img src="/ic-hands-clap.png" alt="like"/></button>
                <button><img src="/ic-ellipsis-message.png" alt="comment"/></button>
                <button><img src="/ic-dumbbell-fill.png" alt="comment"/></button>
            </PostReactionBtnBox>
        </PostWrapper>
    )
}

export default PostCard