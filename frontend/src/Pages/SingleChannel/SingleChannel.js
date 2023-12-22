import "./SingleChannel.css";
import {
  SingleChannelImage,
  SingleChannelNav,
} from "../../section/index";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

const SingleChannel = () => {
  return (
    <>
      <SingleChannelImage />
      <SingleChannelNav />

      <Outlet/>
    </>
  );
};

export default SingleChannel;
