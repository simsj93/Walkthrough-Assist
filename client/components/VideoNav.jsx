import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo2.jpg";


const VideoNavbar = () => {


  function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

  return (
    <header className='container-fluid  d-inline-flex  header'>
      <section>
        <img src={Logo} alt="logo" className='logo'/> 
      </section>

      <nav>
      <NavLink
          to="/"
          style={(isActive) => ({
            color: isActive ? "white" : "blue",
          })}
        >
          Home
        </NavLink>
      </nav>
     
    <div className='d-flex' >
    <button className='btn-mode' onClick={myFunction} >New Mode</button>
    </div>
     
    </header>
  );
};

export default VideoNavbar;