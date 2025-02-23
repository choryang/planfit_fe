import { useLocation, useNavigate } from "react-router-dom"
import { post } from "../../interface/interface"
import { CreatedAt, PostReactionBox, PostReactionBtnBox, PostTop, PostUserInfo, PostWrapper, UserId, UserProfile } from "../../styles/bestTab/PostCard"
import { FollowButton } from "../FollowButton"
import React, { useEffect, useState } from "react";
import client from "../../utils/axios";
import useLikeStore from "../../store/likeStore";
import useUserStore from "../../store/userStore";

function PostCard(props: post) {

    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname;
    const {likes, setLikeList} = useLikeStore();
    const {current_user_id} = useUserStore();
    const [ currentUserLike, setCurrentUserLike ] = useState(false);

    useEffect(() => {
        if(likes.length < 1){
            client.get("/data/likes.json").then((response) => setLikeList(response.data));
        }

        const filtered = likes.filter((like) => like.post_id === props.id && like.user_id === current_user_id)
        if(filtered.length > 0) {
            setCurrentUserLike(true)
        }

    }, [])

    const handleClick = () => {
        if(path === `/best/detail/${props.id}`) {
            return;
        }
        navigate(`/best/detail/${props.id}`, {state: {...props}});
    }

    const handleClickLike = () => {
        const item = {
            id: likes.length,
            post_id: props.id,
            user_id: current_user_id
        }

        if(currentUserLike) {
            const list = likes.filter((like) => like.user_id !== current_user_id)
            setLikeList(list);
            setCurrentUserLike(false);
        } else {
            const list = [...likes];
            list.push(item);
            setLikeList(list);
            setCurrentUserLike(true)
        }
    }


    const handleClickLikeText = () => {
        navigate(`/best/detail/${props.id}/likes`, {state: {post_id: props.id}});
    }

    const handleClickComment = () => {
        navigate(`/best/detail/${props.id}/comments`, {state: {post_id: props.id}});
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
                <button onClick={handleClickLikeText}>
                {props.like === 0 ? "처음으로 박수를 보내보세요!" 
                : currentUserLike ? `회원님 외 ${props.like}명이 박수를 보냈어요` :`${props.like}명이 박수를 보냈어요`}</button>
                <button onClick={handleClickComment}>댓글 <span>{props.comment}</span>개</button>
            </PostReactionBox>
            <PostReactionBtnBox>
                <button onClick={handleClickLike}>{currentUserLike ? <img src="/ic-hands-clap_clicked.png" alt="like"/> : <img src="/ic-hands-clap.png" alt="like"/>}</button>
                <button onClick={handleClickComment}><img src="/ic-ellipsis-message.png" alt="comment"/></button>
                <button><img src="/ic-dumbbell-fill.png" alt="comment"/></button>
            </PostReactionBtnBox>
        </PostWrapper>
    )
}

export const MemoizedPostCard = React.memo(PostCard);