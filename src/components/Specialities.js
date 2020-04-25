import React, { Component } from "react";

export default class Specialities extends Component {
  render() {
    return (
      <section className="probootstrap-section bg1-pattern">
        <h2 className="tit2 t-center">Discover</h2>

        <h3 className="tit3 t-center m-b-35 m-t-5">OUR SPECIALTIES</h3>
        <div className="container" style={{ marginTop: "170px" }}>
          <div className="row">
            <div className="probootstrap-cell-retro">
              <div className="half">
                <div
                  className="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div className="image img2"></div>
                  <div className="text text-center">
                    <h3>Baked Potato Pizza</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p className="price">$20.99</p>
                  </div>
                </div>
                <div
                  className="probootstrap-cell reverse probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div className="image img1 right"></div>
                  <div className="text text-center left">
                    <h3>Salted Fried Chicken</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p className="price">$19.99</p>
                  </div>
                </div>
                <div
                  className="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div className="image img2">
                    {" "}
                    {/* <img src={img} alt="" style={{ width: "100%" }} /> */}
                  </div>
                  <div className="text text-center">
                    <h3>Imported Salmon Steak</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p className="price">$20.99</p>
                  </div>
                </div>
              </div>
              <div className="half">
                <div
                  className="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div className="image img1">
                    {" "}
                    {/* <img src={img} alt="" style={{ width: "100%" }} /> */}
                  </div>{" "}
                  <div className="text text-center">
                    <h3>Roast Beef (4 sticks)</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p className="price">$32.99</p>
                  </div>
                </div>
                <div
                  className="probootstrap-cell reverse probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div className="image img2 right"></div>

                  <div className="text text-center left">
                    <h3>Tuna Roast Source</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p className="price">$25.99</p>
                  </div>
                </div>
                <div
                  className="probootstrap-cell probootstrap-animate fadeIn probootstrap-animated"
                  data-animate-effect="fadeIn"
                >
                  <div className="image img1"> </div>
                  <div className="text text-center">
                    <h3>Fried Potatoes with Garlic</h3>
                    <p>
                      Laboriosam pariatur modi praesentium deleniti molestiae
                      officiis atque numquam.
                    </p>
                    <p className="price">$32.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
