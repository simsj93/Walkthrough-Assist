import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./navbar/Navbar.jsx";
import About from "./about/About.jsx"
import ContentCards from "./content-cards/ContentCards.jsx";

import Footer from "./footer/Footer.jsx";

const FrontPage = () => {
  return (
    <BrowserRouter>
      <Navbar />
    <section className="container">
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<ContentCards />} />
        <Route path="/" element={<Footer />} />
    </Routes>
    </section>
    </BrowserRouter>
  );
};

export default FrontPage;
