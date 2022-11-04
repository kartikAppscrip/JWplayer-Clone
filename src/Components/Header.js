import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../Css/Header.css";
import jwpIcon from "../images/jwpIcon.png"; // Tell webpack this JS file uses this image

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg h-25">
        <div className="container-fluid">
          <div>
            <img src={jwpIcon} alt="eror" className="jwpIcon" />
            <p className="navbar-brand m-0" href="#">
              JWP
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Films
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Live
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-control me-2">
                <div>
                  <SearchIcon />
                </div>
                <input
                  type="search"
                  placeholder="Search.."
                  aria-label="Search"
                  className="searchInput"
                />
              </div>
              <button className="btn btn-outline-success" type="submit">
                Sign In
              </button>
              <button className="btn btn-outline-success" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
