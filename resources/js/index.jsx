import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.scss"
import ContextsProvider from "./app/Context/ContextsProvider"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ContextsProvider>
            <App />
        </ContextsProvider>
    </React.StrictMode>
);
