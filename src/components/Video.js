import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

import "../style/video.css";

import Naruto from "../assets/Naruto.mp4";
const Video = () => {
  return (
    <div className="main__video"  >
    <div className="fixed"
    > 
    <HoverVideoPlayer     videoSrc={Naruto}
    pausedOverlay={
        <img
        src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg"
        alt=""
        style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
            />
        }
        loadingOverlay={<div className="loading-spinner-overlay" />}
        />
        </div>
      <div className="wrapper" >
      <h2> Naruto </h2>
      <div className="video__button" >
      <button className="videobutton" > Resume </button>
      <button className="videobutton" > Download </button>
      </div>

      <p>
        A mysterious group of ninjas makes a surprise attack on the
        Konohagakure, which takes great damage. The nightmare of another Shinobi
        World War could become a reality. Sasuke, who was still a missing nin
        from Konoha trying to kill his brother, Itachi, appears for the second
        time in front of Naruto at an unknown location to prevent it from
        happening.
        </p>
        </div>
        <div className="line" />
  
    </div>
  );
};

export default Video;
