import "./Header.css";
import img from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const xxx = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/auth/logout")
      .then(() => {
        console.log("dddd");
      })
      .catch(({ response }) => {
        if (response.status == 422) {
          console.log(response.data.error);
        } else {
          console.log(response.data.message);
        }
      });
  };
  // href="http://127.0.0.1:8000/api/auth/logout"
  return (
    <div className="navbar">
      <button className="navbar-menu-btn">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </button>

      <Link to="/home" className="navbar-brand">
        <img src={img} alt="" />
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
            {/* <button onClick={xxx}>xxxxxxxxxxx</button> */}
            <button type="submit" class="border-0 bg-transparent me-auto" onClick={xxx}>
              <li class="nav-item">
                <a class="nav-link active" >
                  logout
                </a>
              </li>
            </button>
            {/* <form>
              <input type="hidden" />
              <div class="dropdown-item">
                <i class="fas fa-fw fa-sign-out-alt"></i> &nbsp;{" "}
                <input type="submit" />
              </div>
            </form> */}
            {/* href="http://127.0.0.1:8000/api/auth/logout" */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
