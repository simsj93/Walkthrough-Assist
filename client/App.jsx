import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import FrontPage from "./frontpage/FrontPage.jsx";
import VideoPlayer from "./videopage/VideoPlayer.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/videos/:videoid" element={<VideoPlayer />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;