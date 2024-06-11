import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navBox">
        <nav className="navbar navbar-light ">
      <div className="container-fluid d-flex">
        <form className="d-flex">
          <input
            className="form-control me-2 w-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <div className="navbarIcon">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faWifi} />
        </div>
      </div>
    </nav>
    </div>
  );
};
export default Navbar;
