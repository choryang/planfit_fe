import styled from "styled-components";

export const ListContainer = styled.div`
    margin-top: 20px;
`

export const UserItemWrapper = styled.div`
    
    padding: 0 16px;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 11px 0;
        border-bottom: 1px solid #313237;
    }
`

export const UserItemProfile = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    & img {
         width: 52px;
        height: 52px;
        border-radius: 50%;
    }

    & span {
        font-weight: 700;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 0;
    }
   
`
