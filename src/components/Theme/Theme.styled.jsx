import styled from "styled-components";
import { colorsTheme } from "../../colorsTheme";
const getColorTheme = (colorName, stage) => {
    let color = colorName;
    if (stage) {
        color = colorName === "light" ? "dark" : "light";
    }
    return colorsTheme[color] ?? colorsTheme.dark;
};
export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 100px;
    transition: 3s;
    background-color: ${(props) => getColorTheme(props.theme)};
`;
export const BtnTheme = styled.button`
    padding: 20px 50px;
    background-color: ${(props) => getColorTheme(props.theme)};
    border-radius: 10px;
    color: ${(props) => getColorTheme(props.theme, " ")};
    cursor: pointer;
`;
