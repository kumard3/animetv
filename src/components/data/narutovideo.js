import React from "react";
import naruto from "../../assets/Naruto.mp4";
import { Player } from 'video-react';
const Narutovideo = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="315px"
        src="https://www.youtube.com/embed/-G9BqkgZXRA"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        autoPlay
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Narutovideo
