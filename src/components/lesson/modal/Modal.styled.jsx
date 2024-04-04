import styled from "styled-components";

export const ModalBG = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40vw;
    height: 25vh;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    text-align: center;
`;
export const ButtonForDelTrue = styled.button`
    width: 15vh;
    height: 8vh;
    background-color: rgba(30, 190, 40, 0.8);
    color: white;
    cursor: pointer;
    margin: 10px;
    border: 0;
    padding: 0;
`;
export const ButtonForDelFalse = styled.button`
    width: 15vh;
    height: 8vh;
    background-color: rgba(190, 30, 40, 0.8);
    color: white;
    cursor: pointer;
    margin: 10px;
    border: 0;
    padding: 0;
`;

// export const BtnClose = styled.button`
//     position: absolute;
//     top: 20%;
//     right: 20px;
//     width: 20px;
//     height: 20px;
//     background-color: #000;
// `;
