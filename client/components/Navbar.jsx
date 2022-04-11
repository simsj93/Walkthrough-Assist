import React from "react";
import Logo from "../assets/logo2.jpg";

const FrontNavbar = () => {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

  return (
    <div className="index container-fluid">
      <div lassName=" container-fluid">
        <header className=" container-fluid header">
          <section>
            <img src={Logo} alt="logo" className="logo" />
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

export default FrontNavbar;
