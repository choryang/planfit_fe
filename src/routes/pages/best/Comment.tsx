import { useLoaderData, useLocation } from "react-router-dom";
import { BottomSheet } from "../../../styles/BottomSheet"
import { CommentBox, CommentInput, CommentInputBox, CommentList, EmojiBox, EmojiButton } from "../../../styles/comment/Comment"
import { useEffect, useState } from "react";
import { comment } from "../../../interface/interface";
import useCommentStore from "../../../store/commentStore";
import useUserStore from "../../../store/userStore";
import CommentItem from "./CommentItem";

function Comment() {

    const { commentList, setCommentList } = useCommentStore();
    const { current_user_id } = useUserStore();
    const [ list, setList ] = useState<comment[]>([]);

    const location = useLocation();
    const post_id = location.state.post_id;
    const comments = useLoaderData().data;

    useEffect(() => {

        if(commentList.length === 0) {
            setCommentList(comments);
        }

        const filtered = commentList.filter((comment: comment) => comment.post_id === post_id);
        setList(filtered);

    }, [commentList])
    
    
    const emojis = ["💪", "🔥", "🥳", "👏", "🥊", "🎉", "💣"];
    const [commentValue, setCommentValue] = useState("");

    const handleInputChange = (e: { target: { value: string } }) => {
        setCommentValue(e.target.value);
    }

    const handleEmojiClick = (e: { currentTarget: { innerText: string } }) => {
        const addEmoji = commentValue.concat(e.currentTarget.innerText);
        setCommentValue(addEmoji);
    }

    const handleComment = () => {
        const newComment: comment = {
            id: commentList[commentList.length-1].id + 1,
            post_id: post_id,
            user_id: current_user_id,
            content: commentValue,
            created_at_date: "2025-02-21",
            created_at_time: "8:10",
            like: 0
        }

        const newList = [...commentList];
        newList.push(newComment);
        setCommentList(newList);
        setCommentValue("")
    }

    return (
        <>
            <BottomSheet>
                <CommentBox>
                    <div>
                        댓글 <span>{list.length}</span>
                    </div>
                    <CommentList>
                        {list.map((comment) => {
                            return <CommentItem {...comment} />
                        })}
                    </CommentList>
                </CommentBox>
                <CommentInputBox>
                    <EmojiBox>
                        {emojis.map((emoji) => {
                            return <EmojiButton onClick={handleEmojiClick}>{emoji}</EmojiButton>
                        })}
                    </EmojiBox>
                    <CommentInput>
                        <input type="text" placeholder="댓글을 작성해보세요" value={commentValue} onChange={handleInputChange}/>
                        <button onClick={handleComment}><img src="/long_up.png" alt="comment button" /></button>
                    </CommentInput>
                </CommentInputBox>
            </BottomSheet>
        </>
    )
}

export default Comment