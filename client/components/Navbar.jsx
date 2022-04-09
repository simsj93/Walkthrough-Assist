import React from 'react'
import Logo from "../assets/logo2.jpg";


const FrontNavbar = () => {


  function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

  return (
    <header className='container-fluid  d-inline-flex  header'>
      <section>
        <img src={Logo} alt="logo" className='logo'/> 
      </section>
     
     <button className='btn-mode' onClick={myFunction} >New Mode</button>
     
    </header>
  );
};

export default FrontNavbar;