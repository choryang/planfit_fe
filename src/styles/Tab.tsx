import styled from "styled-components";

export const TabBox = styled.div`
    width: 100%;
    padding: 4px 16px 0;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 16px;
    border-bottom: 1px solid #353940;
`

export const TabButton = styled.button`
    background: none;
    border: none;
    padding: 0 0 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.6px;
    letter-spacing: 0;
    color: #7C8392;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid #1BEDC7;
        color: #FFFFFF;
    }
`