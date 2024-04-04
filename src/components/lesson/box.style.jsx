import styled from "styled-components";

export const BoxL = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${(props) => {
        switch (props.type) {
            case "err":
                return "#f00";
            case "upr":
                return "#00f";
            default:
                return "black";
        }
    }};
`;
