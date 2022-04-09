// import Logo from "./logo2.jpg";
import React from 'react'
// import Logo from "../assets/logo2.jpg";
import { NavLink } from "react-router-dom";



const FrontNavbar = () => {
  return (
    <header className='container-fluid  header'>
      <section>
        {/* <img src={Logo} alt="logo" className='logo' />  */}
      </section>
      <nav>
        <NavLink to="/">Resources</NavLink>
      </nav>
     
    </header>
  );
};

export default FrontNavbar;