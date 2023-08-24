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
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://www.uom.gr">
            <img
              src="https://www.uom.gr/site/images/logos/UOMLOGOGR.png"
              alt="uom-logo"
              width="120"
              height="120"
            />
          </a>

          <div
            role="button"
            class="navbar-burger"
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

        <div id="navbar-menu" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/" class="navbar-item">
              Home
            </Link>
            {valid && (
              <>
                <Link to="/workflows" class="navbar-item">
                  Workflows
                </Link>
                <Link to="/metrics-setup" class="navbar-item">
                  Metrics Setup
                </Link>
                <Link to="/projects" class="navbar-item">
                  Projects
                </Link>

                <div
                  class="navbar-item has-dropdown is-hoverable"
                  onClick={onClickMore}
                >
                  <a class="navbar-link">More</a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">About</a>
                    <a class="navbar-item">Contact</a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item">Report an issue</a>
                  </div>
                </div>
              </>
            )}
            <Link to="/graphs" class="navbar-item">
              Graphs
            </Link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {!valid && (
                  <Link to="/login">
                    <button class="button is-light">Log in</button>
                  </Link>
                )}
                {valid && (
                  <button class="button is-primary" onClick={() => logout()}>
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
