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
              Home
            </Link>
            {/* <Link to="/graphs" className="navbar-item">
              Ταμπλό Δεικτών
            </Link> */}
            {valid && (
              <>
                <Link to="/metrics" className="navbar-item">
                  Manage Metrics
                </Link>
                <Link to="/kpis" className="navbar-item">
                  Manage KPIs
                </Link>
                <Link to="/kpis-setup" className="navbar-item">
                  Create KPIs
                </Link>
                <Link to="/workflows" className="navbar-item">
                  BPMN Diagrams
                </Link>

                <div
                  className="navbar-item has-dropdown is-hoverable"
                  onClick={onClickMore}
                >
                </div>
              </>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!valid && (
                  <Link to="/login">
                    <button className="button is-light">Σύνδεση</button>
                  </Link>
                )}
                {valid && (
                  <button
                    className="button is-primary"
                    onClick={() => logout()}
                  >
                    Αποσύνδεση
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
