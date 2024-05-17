import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Leyout = () => {
    const Navlink = styled(NavLink)`
        width: 100px;
        height: 20px;
    `;
    return (
        <>
            <ul>
                <li>
                    <Navlink to="/createToDo">Create to do</Navlink>
                </li>
                <li>
                    <Navlink to="/ToDo">ToDo</Navlink>
                </li>
            </ul>
            <Outlet/>
        </>
    );
};
