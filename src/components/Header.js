import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md " id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <span
                className="tit2 t-center"
                style={{ color: "#fff", fontSize: "34px" }}
              >
                MyResto
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="active nav-item">
                  <a className="nav-link smooth-scroll" href="index.html">
                    WELCOME{" "}
                  </a>
                </li>
                <li className="active nav-item">
                  <a className="nav-link smooth-scroll" href="index.html">
                    ABOUT US
                  </a>
                </li>
                <li className="active nav-item">
                  <a className="nav-link smooth-scroll" href="index.html">
                    SPECIALITIES
                  </a>
                </li>
                <li className="active nav-item">
                  <a className="nav-link smooth-scroll" href="index.html">
                    MENU
                  </a>
                </li>
                <li className="active nav-item">
                  <a className="nav-link" href="index.html">
                    RESERVATION TABLE
                  </a>
                </li>
                <li className="active nav-item">
                  <a className="nav-link" href="index.html">
                   CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
