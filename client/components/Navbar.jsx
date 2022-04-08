// import Logo from "./logo2.jpg";
import React from 'react'
// import Logo from "../assets/";
import { NavLink } from "react-router-dom";



const FrontNavbar = () => {
  return (
    <header className='container-fluid bg-primary header'>
      <section>
        {/* <img src={Logo} alt="logo" />  */}
      </section>
      <nav>
        <NavLink to="/">Resources</NavLink>
      </nav>
     
    </header>
  );
};

export default FrontNavbar;