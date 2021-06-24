import React from "react";
import "../style/card.css";
import test from "../assets/test.png";
function Card() {
  return (
    <div className="card">
      <div className="card-wrapper" >
        <img className="card-img" src={test} alt="card-img" />
        <img className="card-img" src={test} alt="card-img" />
        <img className="card-img" src={test} alt="card-img" />
        <img className="card-img" src={test} alt="card-img" />
        <img className="card-img" src={test} alt="card-img" />
      </div>
    </div>
  );
}

export default Card;
