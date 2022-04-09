import React from "react";
// import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" header container-fluid ">
      <footer className="footer container-fluid my-5">
      <p>&copy; TeamOne {new Date().getFullYear()}.All rights reserved.</p>
       {/* <a href="https://github.com/WyattTech/Cohort16_Walkthrough-Assist"><FaGithub /></a> */}
    </footer>
    </div>
  );
};

export default Footer; 