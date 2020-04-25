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
              <ul style={{color: "#fff"}} className="navbar-nav ml-auto">
                <li style={{"padding-right": "10px"}}className="active nav-item">
                    WELCOME{" "}
                  </li>
                <li style={{"padding-right": "10px"}} className="active nav-item">
                    ABOUT US
                   </li>
                <li style={{"padding-right": "10px"}}className="active nav-item">
                    SPECIALITIES
                </li>
                <li  style={{"padding-right": "10px"}} className="active nav-item">
                    MENU
                </li>
                <li  style={{"padding-right": "10px"}}  className="active nav-item">
                    RESERVATION TABLE
                </li>
                <li  style={{"padding-right": "10px"}} className="active nav-item">
                   CONTACT US
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
