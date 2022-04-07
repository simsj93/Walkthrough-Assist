import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<VideoPlayer />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;