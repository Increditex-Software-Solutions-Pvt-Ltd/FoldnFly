import { faBook, faBookOpen, faPaperPlane, faRoad } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useModeContext } from "../ModeContext";
import { useEffect } from "react";

const Navbar = () => {
  const { mode, setMode } = useModeContext();

  const [activeTab, setActiveTab] = useState("Hangar");

  useEffect(()=>{
    const savedMode = sessionStorage.getItem("mode");
    if (savedMode !== null) {
      // Set mode based on the value retrieved from session storage
      setMode(savedMode === "true");
    }
  },[])

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleMode =()=>{
     const newMode = !mode;
     setMode(newMode);
     sessionStorage.setItem("mode",newMode)
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-light py-3"
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
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto d-flex flex-row">
              <li className="nav-item position-relative mx-2">
                <Link
                  onClick={() => handleTabChange("Hangar")}
                  className={
                    activeTab === "Hangar"
                      ? `nav-link navbarlink active`
                      : `nav-link navbarlink`
                  }
                  aria-current="page"
                  to="/"
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faPaperPlane} className={mode && activeTab === 'Hangar' ? 'text-danger' : ''} />
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
                <Link
                  onClick={() => handleTabChange("Runway")}
                  className={
                    activeTab === "Runway"
                      ? `nav-link navbarlink active`
                      : `nav-link navbarlink`
                  }
                  to="/runway"
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faRoad} className={mode && activeTab === 'Runway' ? 'text-danger' : ''} />
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
                <Link
                  onClick={() => handleTabChange("Lounge")}
                  className={
                    activeTab === "Lounge"
                      ? `nav-link navbarlink active`
                      : `nav-link navbarlink`
                  }
                  to="/launge"
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faBookOpen} className={mode && activeTab === 'Lounge' ? 'text-danger' : ''} />
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
          </div>

          <div className="d-flex flex-column mt-3">
            <li className="nav-item ">
              <a href="" className="nav-link navbarlink text-center big">
                Sign in
              </a>
            </li>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
                checked={mode}
              />
              <label
                className="form-check-label small"
                htmlFor="flexSwitchCheckDefault"
              >
                kid mode
              </label>
            </div>
          </div>
          <div className="border-top-dotted w-100 d-block d-sm-none  ">
            <div className="py-1">
              <ul className="navbar-nav mx-auto d-flex flex-row justify-content-center">
                <li className="nav-item position-relative mx-2">
                  <Link
                    onClick={() => handleTabChange("Hangar")}
                    className={
                      activeTab === "Hangar"
                        ? `nav-link navbarlink active`
                        : `nav-link navbarlink`
                    }
                    aria-current="page"
                    to="/"
                  >
                    <span className="me-2">
                      <FontAwesomeIcon icon={faPaperPlane} className={mode && activeTab === 'Hangar' ? 'text-danger' : ''} />
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
                  <Link
                    onClick={() => handleTabChange("Runway")}
                    className={
                      activeTab === "Runway"
                        ? `nav-link navbarlink active`
                        : `nav-link navbarlink`
                    }
                    to="/runway"
                  >
                    <span className="me-2">
                      <FontAwesomeIcon icon={faRoad} className={mode && activeTab === 'Runway' ? 'text-danger' : ''} />
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
                  <Link
                    onClick={() => handleTabChange("Lounge")}
                    className={
                      activeTab === "Lounge"
                        ? `nav-link navbarlink active`
                        : `nav-link navbarlink`
                    }
                    to="/launge"
                  >
                    <span className="me-2">
                      <FontAwesomeIcon icon={faBookOpen} className={mode && activeTab === 'Lounge' ? 'text-danger' : ''} />
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
            </div>
          </div>


        </div>
      </nav>
    </>
  );
};

export default Navbar;
