import React from "react";
import banner from "../../assets/banner.jpg";
import "./header.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="main container">
      <div className="header__section-banner_container">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Header;
