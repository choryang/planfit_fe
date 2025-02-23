import styled from "styled-components";

export const FeedWrapper = styled.div`
    width: 164px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const FeedImage = styled.img`
    width: 164px;
    max-height: 250px;
    border-radius: 10px;
    margin-bottom: 4px;
`

export const FeedInfoBox = styled.div`
    
`

export const FeedTitle = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const FeedReactionBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;

    & div {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & span {
            color: #B4B8C0;
            font-size: 12px;
            font-weight: 600;
            line-height: 14.4px;
            letter-spacing: 0;
        }
    }
`

export const FeedReactionIcon = styled.img`
    width: 20px;
    height: 20px;
    padding: 3.5px;
    box-sizing: content-box;
`