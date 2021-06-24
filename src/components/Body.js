import React from "react";
import "../style/body.css";
import Card from "./Card";
function Body() {
  return (
    <div className="body">
      <div className="body-center">
        <div className="body-header">
          {" "}
          <div className="body-headerWrapper">
            <h2>Hello</h2> <h3>, Test </h3>{" "}
          </div>
          <span>yheay yoo this is a test </span>
        </div>
        <div className=" seach-section">
          {" "}
          <h1>search </h1>{" "}
        </div>
      </div>

      <div className="card-seaction">
        {" "}
        <h1>Trending Movies </h1>
        <Card />
      </div>

      <div className="card-seaction">
        {" "}
        <h1>Trending Movies </h1>
        <Card />
      </div>

      <div className="card-seaction">
        {" "}
        <h1>Trending Movies </h1>
        <Card />
      </div>

      <div className="card-seaction">
        {" "}
        <h1>Trending Movies </h1>
        <Card />
      </div>
    </div>
  );
}

export default Body;
