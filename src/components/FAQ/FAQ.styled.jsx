import styled from "styled-components";

export const El = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: column;

    width: 100%;
    background-color: #674000;
    padding: 20px;
    color: #fff;
    :first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 5px;
`;

export const RotatedSvg = styled.img``;
export const HideContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    max-height: ${(props) => (props.status ? "100px" : "1px")};
    transition: 0.5s ease-in-out;
    padding: 0;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none; 
`;
export const FAQSVG = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    & > img {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 20px;
    }
    :first-child {
        transition: transform 0.5s ;
        transform: ${(props) =>
            props.status === "true" ? "rotate(90deg)" : "none"};
    }
`;
