import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "components/ThemeMui/Theme";

// import Theme from "components/Theme/Theme";

// import { CompRef } from "components/lesson/CompRef";
export const rootModal = document.querySelector("#Vtoroj-Root");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider theme ={theme}>
            <BrowserRouter basename="rc-repo">
                <App />
            </BrowserRouter>
    
            {/* <Theme />*/}
            {/* <CompRef/> */}
        </ThemeProvider>
    </React.StrictMode>
);
