import { comment } from "../../../interface/interface"
import { CommentContent, CommentContentBox, CommentCreateAt, CommentItemBox, CommentLike, CommentLikeBtn, CommentReactionBox, CommentUserInfo, CommentUserName } from "../../../styles/comment/CommentItem"

function CommentItem(props: comment) {
    return (
        <CommentItemBox>
            <img src="/profile-sample.png" alt="profile image"/>
            <CommentContentBox>
                <CommentUserInfo>
                    <CommentUserName>{props.user_id}</CommentUserName>
                    <CommentCreateAt>1시간 전</CommentCreateAt>
                </CommentUserInfo>
                <CommentContent>{props.content}</CommentContent>
                <CommentReactionBox>
                    <CommentLike>
                        <CommentLikeBtn><img src="/ic-thumb-up.svg" alt="like button"/></CommentLikeBtn>
                        <span>{props.like}</span>
                    </CommentLike>
                    <button><span>답글 달기</span></button>
                </CommentReactionBox>
            </CommentContentBox>
        </CommentItemBox>
    )
}

export default CommentItem