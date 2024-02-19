import React from "react";
import "./Video.scss";
import poster from "../../assets/images/kubi-screenshot.png";
import video from "../../assets/video/kubi-intro.mp4";

const Video = () => {
  return (
    <video poster={poster} controls="controls" className="video">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
