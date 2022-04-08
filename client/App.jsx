import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./frontpage/FrontPage.jsx";

import Home from "./pages/Home.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";

import VideoPlayer from "./pages/VideoPlayer.jsx";

import Vid from "./pages/Vid.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<FrontPage />} />

                <Route path="/" element={<Home />} />

                <Route path="/videos" element={<VideoPlayer />} />

            </Routes>
        </BrowserRouter>
    )
};

export default App;