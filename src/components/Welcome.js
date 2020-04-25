import React, { Component } from "react";
import img1 from "../img/landing1.png";
import img2 from "../img/landing2.png";
import img3 from "../img/landing3.png";
import img4 from "../img/landing4.png";
export default class Welcome extends Component {
  render() {
    return (
      <section id="landing-page" data-section="welcome">
        <div className="content-box-lg" style={{ marginTop: "8%" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-1 wow fadeIn" data-wow-duration="1s">
                <div id="tech-statement" className="text-center">
                  <h1 style={{ color: "white" }}>
                    <i className="fa fa-quote-left"></i>
                    <h1
                      className="tit2 t-center text-white"
                      style={{ fontWeight: "bold", fontSize: "70px" }}
                    >
                      MyResto Welcomes You!
                    </h1>
                    <i className="fa fa-quote-right"></i>
                  </h1>
                </div>
              </div>
              <div>
                <img src={img1} className="imgg1" alt="" />
                <img src={img2} className="imgg2" alt="" />
                <img src={img3} className="imgg3" alt="" />
                <img src={img4} className="imgg4" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
