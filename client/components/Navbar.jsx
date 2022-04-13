import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo2.jpg";

const Navbar = () => {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

  return (
    <div className="index container-fluid">
      <div className=" container-fluid">
        <header className=" container-fluid header">
          <section>
            <img src={Logo} alt="logo" className="logo" />
          </section>
          <section className="title-container">
            <h1 className="h1-flex">TL;DW</h1>
          </section>
          <section>
            <nav id="homeNav" className="nav">
              <NavLink to="/" className="nav-item1 fs-1">
                Home
              </NavLink>
            </nav>
          </section>
        </header>
        <div className=" flex-container ">
          <button className="btn-mode flex-item" onClick={myFunction}>
            New Mood
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
