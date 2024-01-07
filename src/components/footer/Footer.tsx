import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = (): JSX.Element => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-white">
    <div className="footer-icons text-center py-3">
      <a
        href="https://instagram.com/fkesoftware"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} className="icon" />
      </a>
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={30} className="icon" />
      </a>
      <a
        href="https://linkedin.com/in/feyzakaranfilerat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} className="icon" />
      </a>
      <a
        href="https://github.com/feyzaerat"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} className="icon" />
      </a>
    </div>
    <div className="footer-copyright text-center py-3">
      © 2024 Copyright:
      <a
        href="https://feyzaerat.com.tr/"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        feyzaerat.com.tr
      </a>
    </div>
  </footer>
);

export default Footer;
