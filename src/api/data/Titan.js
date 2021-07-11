import React from "react";
import data from '../data';
import { useParams } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import "../../style/cardinfo.scss";
import Rectangle from "../../assets/Rectangle.png";

import playwhite from "../../assets/playwhite.svg";
import save from "../../assets/save.svg";
import { Link } from "react-router-dom";

const Titan = () => {
  return (
    <div>
      <div className="card__info">
        <Link to="/">
          <img className="arrow" src={arrow} />
        </Link>

        <img className="cardinfo__img" src={data[1].img} alt="card-img" />
        <img className="back" src={Rectangle} />
        <div className="cardinfo__wrapper">
          <h2>{data[1].name} </h2>
          <div className="genes">
            <span> Adventure </span>
            <span> Drama </span>
            <span> Adventure </span>
          </div>
          <p>{data[1].des}</p>
        </div>

        <div className="bottom___section">
          <Link to="/narutovideo">
            <button className="bottom___button">
              <img className="playwhite" src={playwhite} alt="" />
              <h3>Watch Now </h3>
            </button>
          </Link>
          <button className="bottom___button2">
            <img className="save" src={save} alt="" />
            <h3>Save </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Titan;
