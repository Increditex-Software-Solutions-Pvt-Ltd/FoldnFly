import { faPaperPlane, faRoad } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useModeContext } from "../ModeContext";
import { useEffect } from "react";

const Navbar = () => {
  const { mode, setMode } = useModeContext();
  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-light py-3"
        style={{ borderBottom: "2px solid #7b7bb8" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/img/logo.svg"
              className="img-fluid"
              width="90px"
              alt=""
            />
          </a>
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item position-relative mx-2">
                <Link
                  className="nav-link navbarlink active"
                  aria-current="page"
                  to="/"
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  Hangar
                </Link>
                <span
                  className="x-small position-absolute text-secondary"
                  style={{ left: "6px", bottom: "-7px" }}
                >
                  Airplanes
                </span>
              </li>
              <li className="nav-item position-relative mx-2">
                <Link className="nav-link navbarlink" to="/runway">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faRoad} />
                  </span>
                  Runway
                </Link>
                <span
                  className="x-small position-absolute text-secondary"
                  style={{ left: "6px", bottom: "-7px" }}
                >
                  Tips & Tricks
                </span>
              </li>
              <li className="nav-item position-relative mx-2">
                <Link className="nav-link navbarlink" to="/launge">
                  <span className="me-2">
                    <i className="bi bi-book"></i>
                  </span>
                  Lounge
                </Link>
                <span
                  className="x-small position-absolute text-secondary"
                  style={{ left: "6px", bottom: "-7px" }}
                >
                  Read & learn
                </span>
              </li>
            </ul>
            <div className="d-flex flex-column mt-3">
              <li className="nav-item ">
                <a href="" className="nav-link navbarlink text-center big">
                  Sign in
                </a>
              </li>
              <div
                className="form-check form-switch"
                
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => setMode(!mode)}
                />
                <label
                  className="form-check-label small"
                  htmlFor="flexSwitchCheckDefault"
                >
                  kid mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
