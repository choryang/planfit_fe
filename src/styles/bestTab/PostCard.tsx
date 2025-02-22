import styled from "styled-components";

export const PostCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    height: 708px;
    overflow-y: scroll;
`

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 10px solid #141719;

    & > img {
        width: 375px;
        height: 375px;
        cursor: pointer;
    }
`

export const PostUserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserProfile = styled.div`
    display: flex;
    gap: 10px;
    
    & img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
    }

    & div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`

export const UserId = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 0;
`

export const CreatedAt = styled.span`
    color: #D0D2D7;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    letter-spacing: 0;
`

export const PostTop = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;

    & > span {
        word-break: break-all;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
    }

`

export const PostReactionBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    

    & > button {
        font-weight: 400;
        font-size: 12px;
        line-height: 14.4px;
        letter-spacing: 0;
        background: none;
        color: #FFFFFF;
        border: none;
        cursor: pointer;

        & > span {
            font-weight: 700;
        }
    }
`

export const PostReactionBtnBox = styled.div`
    display: flex;
    padding: 12px 16px;
    border-top: 1px solid #2A2C32;

    & > button {
        background: none;
        border: none;
        padding: 0 48px;
        cursor: pointer;

        &:not(:last-child) {
            border-right: 1px solid #2A2C32;
        }

        & > img {
            width: 20px;
            height: 20px;
        }
    }
`