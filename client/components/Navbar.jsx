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
     
    <div className='d-flex' >
    <button className='btn-mode' onClick={myFunction} >New Mode</button>
    </div>
     
    </header>
  );
};

export default FrontNavbar;