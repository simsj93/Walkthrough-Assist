import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./About.jsx";
import ContentCards from "./ContentCards.jsx";
import FrontNavbar from "../components/Navbar.jsx";
import Footer from "./Footer.jsx";

const FrontPage = () => {
  return (
    <>
      <FrontNavbar />
      <section className="container">
        {/*  temporary  */}
        <About />
        <ContentCards />
        <Footer />
      </section>
    </>
  );
};

export default FrontPage;