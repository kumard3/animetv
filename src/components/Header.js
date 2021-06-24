import React from "react";
import "../style/header.css";
import profile from '../assets/profile.png'
function Header() {
  return (
    <div className="header">
      <h3 className="logo" > anime.tv</h3>
      <img className="profile" src={profile} alt="profile" />
    </div>
  );
}

export default Header;
