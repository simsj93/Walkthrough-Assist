import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./frontpage/Home.jsx";

import VideoPlayer from "./videopage/VideoPlayer.jsx";


const App = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:videoid" element={<VideoPlayer />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;