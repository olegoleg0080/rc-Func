import { createPortal } from "react-dom";
import ClockLoader from "react-spinners/ClockLoader";
import styled from "styled-components";
import { rootModal } from "index";

const BackgroundSpiner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Loader = () => {
    return createPortal(
        <BackgroundSpiner>
            <ClockLoader color="#36d7b7" size={150} />
        </BackgroundSpiner>,
        rootModal
    );
};
