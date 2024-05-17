import { GlobalStyle } from "GlobalStyle";

import { Leyout } from "components/Layout/leyout";

import { CreateToDo } from "components/pages/CreateToDo";
import { Home } from "components/pages/Home";
import { ToDo } from "components/pages/ToDo";
import { ToDoDetal } from "components/pages/ToDoDetal";

// import { useLocalStorage } from "hooks/useLocalStorage";

import { Route, Routes } from "react-router-dom";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Leyout />}>
                <Route index element={<Home/>}/>
                    <Route path="createToDo" element={<CreateToDo />} />
                    <Route path="ToDo" element={<ToDo />} />
                    <Route path="ToDo/:ToDoId" element={<ToDoDetal />} />
                    <Route path="*" element={<div>404!!!</div>} />
                </Route>
            </Routes>
            {/* {<FAQ />} */}
            <GlobalStyle />
        </>
    );
};
