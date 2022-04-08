import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./frontpage/FrontPage.jsx";
// import VideoPlayer from "./videopage/VideoPlayer.jsx";
// import Vid from "./videopage/iframe.jsx";
import VideoPlayer from "./videopage/VideoPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/videos/:videoid" element={<VideoPlayer />} />
                {/* <Route path="/vids" element={<Vid />} /> */}
            </Routes>
        </BrowserRouter>
    )
};

export default App;