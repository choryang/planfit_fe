import { useNavigate } from "react-router-dom"
import { post } from "@/interface/interface"
import { FeedImage, FeedInfoBox, FeedReactionBox, FeedReactionIcon, FeedTitle, FeedWrapper } from "@/styles/bestTab/FeedBox"
import React, { useEffect, useState }  from "react";
import useLikeStore from "@/store/likeStore";
import useUserStore from "@/store/userStore";
import client from "@/utils/axios";


function FeedBox(props: post) {

    const navigate = useNavigate();
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
        navigate("/best/best_tab", { state: {...props}});
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

    const handleClickComment = () => {
        navigate(`/best/detail/${props.id}/comments`, {state: {post_id: props.id}});
    }

    return (
        <FeedWrapper>
            <FeedImage onClick={handleClick} src={props.image} alt="image"/>
            <FeedInfoBox>
                <FeedTitle>{props.title}</FeedTitle>
                <FeedReactionBox>
                    <div>
                        {currentUserLike ? <FeedReactionIcon onClick={handleClickLike} src="/ic-hands-clap_clicked.png" alt="like" /> :<FeedReactionIcon onClick={handleClickLike} src="/ic-hands-clap.png" alt="like" />}
                        <span>{props.like}</span>
                    </div>
                    <div>
                        <FeedReactionIcon onClick={handleClickComment} src="/ic-ellipsis-message.png" alt="comment" />
                        <span>{props.comment}</span>
                    </div>
                </FeedReactionBox>
            </FeedInfoBox>
        </FeedWrapper>
    )
}

export const MemoizedFeedBox = React.memo(FeedBox)