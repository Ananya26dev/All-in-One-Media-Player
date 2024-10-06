import React from "react";
import ReactPlayer from "react-player";
import Video from "../assets/video.mp4";
const FullPageVideoBG = () => {
  return (
    <div className="video-background">
      <ReactPlayer url={Video} playing loop muted className="react-player" />
    </div>
  );
};

export default FullPageVideoBG;
