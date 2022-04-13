import React from "react";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className="footer mt-3 p-2">
      <footer className="p-2">
      <p>&copy; TeamOne {new Date().getFullYear()}. All rights reserved.</p>
      <a className="link " target={'_blank'} href="https://github.com/WyattTech/Cohort16_Walkthrough-Assist"><FaGithub /> Walkthrough Assist</a> 
    </footer>
    </div>
    </>
  );
};

export default Footer; 