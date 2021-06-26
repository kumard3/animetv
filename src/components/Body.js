import React from "react";
import "../style/body.css";
import Card from "./Card";
import requests from './card-data'
function Body() {

  return (
    <div className="body">

      <div className="card-seaction">
        <h2 className="body-title">Trending Movies </h2>        
        <Card fetchUrl={requests.fetchPage1}/>
        <Card fetchUrl={requests.fetchPage2}/>
        <Card fetchUrl={requests.fetchPage3}/>
        <Card fetchUrl={requests.fetchPage4}/>
        <Card fetchUrl={requests.fetchPage5}/>
        <Card fetchUrl={requests.fetchPage6}/>
        <Card fetchUrl={requests.fetchPage7}/>

      </div>

    </div>
  );
}

export default Body;
