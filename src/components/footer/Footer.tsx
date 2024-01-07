import React from "react";
import "./footer.css"

const Footer = (): JSX.Element => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-white">
    <div className="footer-copyright text-center py-3">
      © 2024 Copyright:
      <a
        href="https://feyzaerat.com.tr/"
        className="text-white text-decoration-none"
      >
        {" "}
        feyzaerat.com.tr
      </a>
    </div>
  </footer>
);

export default Footer;
