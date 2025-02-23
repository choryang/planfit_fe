import styled from "styled-components";

export const CommentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 32px 16px 0;

    & > div {
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0;

        & > span {
            color: #D0D2D7;
            font-weight: 400;
            font-size: 14px;
            line-height: 22.4px;
            letter-spacing: 0;
        }
    }
`

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 32px;
    gap: 30px;
    height: 680px;
    padding-bottom: 132px;
    overflow-y: scroll;
`

export const CommentInputBox = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
`

export const CommentInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background-color: #353940;

    & > input {
        width: 298px;
        border-radius: 10px;
        padding: 9px 12px;
        background-color: #4C515C;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 0;

        &::placeholder {
            color: #7C8392;
        }
    }

    & > button {
        & > img {
            width: 24px;
            height: 24px;
        }

        border-radius: 10px;
        padding: 6px;
        line-height: 0;
        background-color: #1BEDC7;
    }
`

export const EmojiBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    gap: 10px;
    padding: 16px 0;
    background: linear-gradient(360deg, #2A2C32 80%, rgba(42, 44, 50, 0) 100%);
`

export const EmojiButton = styled.button`
    padding: 8px 16px 4px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0;
    box-shadow: 0px 0px 8px 2px #00000033;
    background-color: #4C515C;
    cursor: pointer;

    &:first-child {
        margin-left: 16px;
    }

    &:last-child {
        margin-right: 16px;
    }
`