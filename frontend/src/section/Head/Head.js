import "./Head.css";
import { CategoryCard } from "../../components/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Head = () => {

  return (
    <div className="navbar">
    <button className="navbar-menu-btn">
      <span className="one"></span>
      <span className="two"></span>
      <span className="three"></span>
    </button>

    <Link to="/home" className="navbar-brand">
      {/* <img src={img} alt="" /> */}
    </Link>

    <nav className="navbar-actions">
      <Link to="/home" className="navbar-link">
        Home
      </Link>

      <Link to="/all-video" className="navbar-link ml-4">
        All Videos
      </Link>


      <Link class="navbar-link ml-4" to="/upload-video">

        Upload Video
      </Link>
      
    </nav>

    <div className="navbar-actions">
      <form action="#" className="navbar-form">
        <input
          type="text"
          name="search"
          placeholder="I'm looking for..."
          className="navbar-form-search"
        />

        <button className="navbar-form-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>

        <button className="navbar-form-close">
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </form>

      <button className="navbar-search-btn">
        <ion-icon name="search-outline"></ion-icon>
      </button>

      <Link to="/login" className="navbar-signin">
        <span>Login</span>
        <ion-icon name="log-in-outline"></ion-icon>
      </Link>

      <div class="nav-item dropdown no-arrow osahan-right-navbar-user">
        <a
          class="navbar-signin  nav-link  user-dropdown-link"
          href="#"
          id="usereDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span>Register</span>
          <ion-icon name="log-in-outline"></ion-icon>
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="usereDropdown"
        >
          <Link class="dropdown-item" to="/register-teacher">
            <i class="fas fa-fw fa-user-circle"></i> &nbsp; Teacher
          </Link>
          <Link class="dropdown-item" to="/register">
            <i class="fas fa-fw fa-user-circle"></i> &nbsp; Student
          </Link>
        </div>
      </div>
      <div class="nav-item dropdown no-arrow osahan-right-navbar-user">
        <a
          class="navbar-link dropdown-toggle user-dropdown-link"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Osahan
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="userDropdown"
        >
          <Link class="dropdown-item" to="/single-channel">
            <i class="fas fa-fw fa-user-circle"></i> &nbsp; My Channel
          </Link>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Head;
