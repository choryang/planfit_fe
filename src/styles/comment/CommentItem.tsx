import styled from "styled-components";

export const CommentItemBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;

    & > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
`

export const CommentContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const CommentUserInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    margin-bottom: 6px;
    gap: 6px;
`

export const CommentCreateAt = styled.span`
    color: #B4B8C0;
    font-weight: 400;
    font-size: 11px;
    line-height: 13.2px;
    letter-spacing: 0;
`

export const CommentUserName = styled.span`
    font-weight: 600;
    font-size: 12px;
    line-height: 14.4px;
    letter-spacing: 0;
`

export const CommentContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22.4px;
    letter-spacing: 0;
    margin-bottom: 10px;
`

export const CommentReactionBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    & > button {
        background: none;
        cursor: pointer;
        line-height: 0;
    }

     & span {
        color: #D0D2D7;
        font-weight: 400;
        font-size: 12px;
        line-height: 14.4px;
        letter-spacing: 0;
    }
`

export const CommentLike = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`

export const CommentLikeBtn = styled.button`
    
    background: none;
    cursor: pointer;

    & > img {
        width: 20px;
        height: 20px;
    }
`