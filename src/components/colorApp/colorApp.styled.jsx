import styled from "styled-components";
// import { ColorSel } from "./ColorSel";

export const ColorSel = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    border: ${(props) => {
        if (props.bgColor !== props.colorState) {
            return "transparent";
        }
            return "3px solid #0000ff";
    }};
    cursor: pointer;
    margin: 5px;
`;

export const ColorDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const Palitra = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const PrevColorResult = styled.div`
    width: 40px;
    height: 40px;
    margin: 5px;
    background-color: ${(props) => props.bgColor};
`;

export const ColorResult = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.bgColor};
    border: 1px solid black;
`;

export const ResetBtn = styled.button`
    width: 50px;
    height: 30px;
    background-color: #ff0000;
    color: #fff;
    cursor: pointer;
`;

export const ColorPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const ColorResulPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
