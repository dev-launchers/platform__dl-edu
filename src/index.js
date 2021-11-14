import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
//import DarkApp from "./DarkApp";
import DarkApp from "./DarkApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <StrictMode>
            <DarkApp />
        </StrictMode>
    </BrowserRouter>,
    rootElement
);
