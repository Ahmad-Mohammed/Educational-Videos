import "./LeftSide.css";
import {
  VideoPlayer,
  VideoTitle,
  VideoAuther,
  VideoContent,
} from "../../components/index";
import { useEffect, useState } from "react";

const LeftSide = () => {

  return (
    <div class="col-md-9">
      <div class="single-video-left">
        <VideoPlayer />
        <VideoTitle />
        <VideoAuther />
        <VideoContent />
      </div>
    </div>
  );
};

export default LeftSide;
