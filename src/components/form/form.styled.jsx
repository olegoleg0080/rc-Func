import { colors } from "constants";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const List = styled.ul`
    margin: 0;
    padding: 25px;
    border: 1px solid black;
    list-style: none;
    display: flex;
    column-gap: 24px;
    flex-wrap: wrap;
`;

const getColor = ({ level }) => {
    let lvl = level;
    switch (lvl) {
        case "hard":
            return colors.LEVEL_ONE;
        case "normal":
            return colors.LEVEL_TWO;
        case "easy":
            return colors.LEVEL_THREE;
        default:
            break;
    }
};

const getComp = ({ status }) => {
    switch (status) {
        case true:
            return colors.COMPLETE;
        case false:
            return "transparent";
        default:
            break;
    }
};

export const Item = styled.li`
    position: relative;
    width: calc((100% - 48px) / 3);
    padding: 10px;
    border: 4px solid ${getColor};
    margin-bottom: 10px;
    background-color: ${getComp};
`;
export const FormToDoComponent = styled(Form)`
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 14px;
    color: grey;
`;
export const Level = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 25px;
    border: 1px solid black;
`;

export const FormSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    gap: 20px;
    border: 2px solid #0000ff;
    max-width: 400px;
    margin: 20px auto;
`;

export const FormTitle = styled.h2`
    color: red;
    font-size: 16px;
    font-weight: 700;
    border: 4px solid black;
    padding: 10px;
`;
export const InputSortForm = styled.input`
    padding: 10px;
    display: block;
`;
export const Input = styled(Field)`
    padding: 10px;
    display: block;
`;


export const Label = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-bottom: 10px;
`;

export const FormSub = styled.button`
    width: 200px;
    padding: 10px;
    background: #0f5fff;
    color: #ffff;
    cursor: pointer;
`;

export const Select = styled.select`
    width: 200px;
    padding: 10px;
    background-color: #ffff;
    color: black;
`;

export const DelBtn = styled.button`
    padding: 10px;
    display: inline-block;
    outline: "1px solid black";
    background-color: #fc0000;
    color: #fff;
`;
