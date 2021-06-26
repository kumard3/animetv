import React from "react";
import "../style/header.css";
import profile from '../assets/profile.png'
function Header() {
  return (
    <div className="header">
      <h2 className="logo" > anime<span className="logo-img">.tv</span></h2>
      <img className="profile" src={profile} alt="profile" />
    </div>
  );
}

export default Header;
