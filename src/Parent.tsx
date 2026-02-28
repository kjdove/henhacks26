import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Bandit } from "./App";
import { App } from "./App";
import "./App.css";

export function Parent() {
    const [bandits] = useState<Bandit[]>(() => {
        const saved = localStorage.getItem("bandits");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("bandits", JSON.stringify(bandits));
    }, [bandits]);

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