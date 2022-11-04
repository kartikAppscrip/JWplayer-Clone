import React from "react";
import "../Css/Header.css";
import jwpIcon from "../images/jwpIcon.png"; // Tell webpack this JS file uses this image

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg h-25 navbar-dark">
        <div className="container-fluid">
          <div style={{ display: "flex" }}>
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
              <div className="form-control me-2 bg-dark border-opacity-0">
                {/* <div>
                  <SearchIcon className="text-light" />
                </div> */}
                <input
                  type="search"
                  placeholder="Search.."
                  className="searchInput bg-dark fw-bold border-0 text-light"
                />
              </div>
              <button className="btn btn-dark" type="submit">
                Sign In
              </button>
              <button className="btn btn-light" type="submit">
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
