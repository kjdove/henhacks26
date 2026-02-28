import { BrowserRouter, Routes, Route } from "react-router-dom";


import { App } from "./App";
import "./App.css";


export function Parent() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<App/>}
                />
                
            </Routes>
        </BrowserRouter>
    );
}