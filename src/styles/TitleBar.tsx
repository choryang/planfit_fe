import styled from "styled-components";

export const TitleBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px;

    & img {
        box-sizing: content-box;
        width: 24px;
        height: 24px;
        padding: 10px;
        cursor: pointer;
    }

    & span {
        font-size: 18px;
        font-weight: 700;
        line-height: 21.6px;
        letter-spacing: 0;
    }
`