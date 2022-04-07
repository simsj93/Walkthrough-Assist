import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import FrontPage from "./frontpage/FrontPage.jsx";
=======
import Home from "./pages/Home.jsx";
import Vid from "./pages/Vid.jsx";
>>>>>>> af18713b475b6e71c170ed21e6ee0d706b3eba17

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<FrontPage />} />
=======
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<Videos />} />
>>>>>>> af18713b475b6e71c170ed21e6ee0d706b3eba17
            </Routes>
        </BrowserRouter>
    )
};

export default App;