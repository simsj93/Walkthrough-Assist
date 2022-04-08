import React from 'react';


import About from "./About.jsx";
import ContentCards from "./ContentCards.jsx";
import FrontNavbar from "../components/Navbar.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <>
      <FrontNavbar />
      <section className="container">
        <h1>test</h1>
        <About />
        <ContentCards />
        <Footer />

      </section>
    </>
  );
};

export default Home;
