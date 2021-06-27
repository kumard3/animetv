import React from "react";
import "../style/body.css";
import Card from "./Card";
import requests from "./card-data";
import ReactCarousel from "./ReactCarousel";
import Rectangle from "../assets/Rectangle.png";
import info from "../assets/info.svg";
import play from "../assets/play.jpg";
import list from "../assets/list.png";

function Body() {
  return (
    <div className="body">
      <ReactCarousel autoPlay="true" fetchUrl={requests.fetchPage1} />
      <img className="back" src={Rectangle} />
{   /*   <div className="button__section">
        <button> My List </button>
        <button> Play </button>
        <button> Info </button>
  </div> */}
      <div className="card-seaction">
        <h2 className="body-title">Trending Movies </h2>
        <Card fetchUrl={requests.fetchPage2} />
        <Card fetchUrl={requests.fetchPage3} />
        <Card fetchUrl={requests.fetchPage4} />
        <Card fetchUrl={requests.fetchPage5} />
        <Card fetchUrl={requests.fetchPage6} />
        <Card fetchUrl={requests.fetchPage7} />
      </div>
    </div>
  );
}

export default Body;
