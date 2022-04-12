import React from 'react';


import About from "./About.jsx";
import ContentCards from "./ContentCards.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const FrontPage = () => {
  return (
    <>
      <Navbar  />
      <section className="container">

        <About />
        <ContentCards />
        <Footer />
      </section>
    </>
  );
};

export default FrontPage;