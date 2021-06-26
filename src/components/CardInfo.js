import React from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../style/cardinfo.css";
const CardInfo = ({ allData }) => {
  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  return (
    <div>
      {animeData.map((anime) => {
        return <h1>{anime.overview}</h1>;
      })}
    </div>
  );
};

export default CardInfo;
