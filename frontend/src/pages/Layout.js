import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import isAuthenticated from "../scripts/Tokens";

function onClickBurger() {
  document.querySelector(".navbar-menu").classList.toggle("is-active");
  document.querySelector(".navbar-dropdown").classList.toggle("is-hidden");
}

function onClickMore() {
  document.querySelector(".navbar-dropdown").classList.toggle("is-hidden");
}

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "../";
};

const Layout = () => {
  const [valid, setvalid] = useState();

  useEffect(() => {
    var isvalid = isAuthenticated();
    setvalid(isvalid);
  }, []);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.uom.gr">
            <img
              src="https://www.uom.gr/site/images/logos/UOMLOGOGR.png"
              alt="uom-logo"
              width="120"
              height="120"
            />
          </a>

          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            onClick={onClickBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbar-menu" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Κεντρική
            </Link>
            <Link to="/graphs" className="navbar-item">
              Ταμπλό Δεικτών
            </Link>
            {valid && (
              <>
                <Link to="/workflows" className="navbar-item">
                  Workflows
                </Link>
                <Link to="/metrics-setup" className="navbar-item">
                  Metrics Setup
                </Link>
                <Link to="/projects" className="navbar-item">
                  Projects
                </Link>
                <Link to="/indicators" className="navbar-item">
                  Διαχείριση Δεικτών
                </Link>
                <Link to="/metrics" className="navbar-item">
                  Διαχείριση Μετρικών
                </Link>
                <Link to="/users" className="navbar-item">
                  Διαχείριση Χρηστών
                </Link>

                <div
                  className="navbar-item has-dropdown is-hoverable"
                  onClick={onClickMore}
                >
                  <a className="navbar-link">More</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Contact</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Report an issue</a>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!valid && (
                  <Link to="/login">
                    <button className="button is-light">Log in</button>
                  </Link>
                )}
                {valid && (
                  <button
                    className="button is-primary"
                    onClick={() => logout()}
                  >
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
