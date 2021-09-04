import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const [search, setSearch] = React.useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const submit = async () => {
    console.log(search);

    axios({
      url: "https://webgen-assessment-backend.herokuapp.com/products/searchproduct",
      method: "POST",
      data: { searchGiven: search },
    }).then((res) => {
      console.log(res.data.payload);
      dispatch({ type: "SEARCH_PRODUCT", payload: res.data.payload });
    });
  };

  const logout = () => {
    console.log("alert");
    axios({
      url: "https://webgen-assessment-backend.herokuapp.com/authentication/logout",
      method: "POST",
    }).then((res) => {
      console.log(res);
      props.onload();
    });
  };

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
            <input
              class="form-control me-2"
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search"
              name="searchGiven"
              value={search}
              aria-label="Search"
            />
            <button class="btn" onClick={submit}>
              Submit
            </button>

            <Link class="btn" to="/create" type="submit">
              Create
            </Link>

            {props.cookie === undefined ? (
              <>
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
              </>
            ) : (
              <li class="nav-item">
                <button class="btn" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
