import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = (): JSX.Element => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-white">
    <div className="footer-icons text-center py-3">
      <Link
        to="https://instagram.com/fkesoftware"
        target="_blank"
        
      >
        <FaInstagram size={30} className="icon" />
      </Link>
      <Link to="https://youtube.com/" target="_blank" >
        <FaYoutube size={30} className="icon" />
      </Link>
      <Link
        to="https://linkedin.com/in/feyzakaranfilerat"
        target="_blank"
        
      >
        <FaLinkedin size={30} className="icon" />
      </Link>
      <Link to="https://github.com/feyzaerat" >
        <FaGithub size={30} className="icon" />
      </Link>
    </div>
    <div className="footer-copyright text-center py-3">
      © 2024 Copyright:
      <Link
        to="https://feyzaerat.com.tr/"
        className="text-white text-decoration-none"
        target="_blank"
        
      >
        {" "}
        feyzaerat.com.tr
      </Link>
    </div>
  </footer>
);

export default Footer;
