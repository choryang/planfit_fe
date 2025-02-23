import { comment } from "../../../interface/interface"

function CommentItem(props: comment) {
    return (
        <>
            <img src="/profile-sample.png" alt="profile image"/>
            <div>
                <div>
                    <span>{props.user_id}</span>
                    <span>1시간 전</span>
                </div>
                <span>{props.content}</span>
                <div>
                    <div>
                        <button><img src="/ic-thumb-up.png" alt="like button"/></button>
                        <span>{props.like}</span>
                    </div>
                    <button>답글 달기</button>
                </div>
            </div>
        </>
    )
}

export default CommentItem