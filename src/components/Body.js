import React from "react";
import "../style/body.css";
import Card from "./Card";
import requests from "./card-data";
import ReactCarousel from "./ReactCarousel";
import Rectangle from "../assets/Rectangle.png";
import info from "../assets/info.svg";
import play from "../assets/play.svg";
import list from "../assets/list.svg";

function Body() {
  return (
    <div className="body">
      <ReactCarousel autoPlay="true" fetchUrl={requests.fetchPage1} />
      <img className="back" src={Rectangle} />
      <div className="genre__section" >
        <span className="genre__h3" >
          Adventure <span>.</span>Fiction<span>.</span> Dark fantasy<span>.</span> Martial
          Arts
        </span>
      </div>

      <div className="button__section">
        <div className="mylist">
          {" "}
          <img className="mylistt" src={list} />
          <span> My List </span>
        </div>
        <div className="myplay">
          {" "}
          <button className="myplaybutton">
            <img className="playy" src={play} />
            Play{" "}
          </button>
        </div>
        <div className="mylist">
          {" "}
          <img className="mylistt" src={info} />
          <span> Info </span>
        </div>
      </div>
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
