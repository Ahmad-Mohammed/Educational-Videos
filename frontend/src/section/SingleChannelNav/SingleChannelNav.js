import "./SingleChannelNav.css";
import { Link, NavLink } from "react-router-dom";

const SingleChannelNav = (props) => {
  return (
    <div class="single-channel-nav box ">
    <nav class="navbar navbar-expand-lg ">
      <div class="channel-brand" >
        Osahan Channel
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink class="nav-link" to="videos">
              Videos <span class="sr-only"></span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="playlist">
              Playlist
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="about">
              About
            </NavLink>
          </li>
        
        </ul>
        <form class="form-inline my-2 my-lg-0">
        
          <button class="btn btn-outline-danger btn-sm" type="button">
            Subscribe <strong>1.4M</strong>
          </button>
        </form>
      </div>
    </nav>
  </div>
  );
};

export default SingleChannelNav;
