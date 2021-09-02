import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Login from "./Login"

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <div className="container">
      <Link to="/" className="navbar-brand ml-5">
        LOGO
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 flex-grow-1">


            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn" type="submit">Create</button>


          <li class="nav-item d-flex">
            <Link class="nav-link" to="/login">
            Login 
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/register">
                Register
            </Link>
          </li>


        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
