import React from "react";
import ReactPlayer from "react-player";
const RegularVideo = () => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=6_vyvAeLOjI"
        playing
        loop
        controls
        className="react-player-regular"
      />
    </div>
  );
};

export default RegularVideo;
