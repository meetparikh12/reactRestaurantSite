import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section className="probootstrap-footer " style={{background: "#000", padding: "6% 0", color: "#fff"}}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                            <div>
                            <h3 className="footer-font-change">LOCATIONS</h3>
                            <div className="row">
                                <div className="col-md-6">
                                <p className="footer-smallFont-change">1st Floor Shalini Road <br/> Vadodara Gujarat, 390007</p>
                                </div>
                                <div className="col-md-6">
                                <p className="footer-smallFont-change"> 2nd Floor Shalim Road <br/> Vadodara Gujarat, 390007</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 probootstrap-animate">
                            <div className="probootstrap-footer-widget">
                            <h3 className="footer-font-change">OPEN HOURS</h3>
                            <div className="row">
                                <div className="col-md-4">
                                <p className="footer-smallFont-change">Monday - Thursday <br/> 5:30pm - 10:00pm</p>
                                </div>
                                <div className="col-md-4">
                                <p className="footer-smallFont-change">Friday - Sunday <br/> 5:30pm - 10:00pm</p>
                                </div>
                                <div className="col-md-4">
                                <p className="footer-smallFont-change">Available for Catering <br/> Email or Call Us</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="footer-copyright">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8">
                            <p className="copyright-text">&copy; 2020 MyResto. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-4 text-right">
                            <a href="/"><i className="fab icon fa-twitter"></i></a>
                            <a href="/"><i className="fab icon fa-facebook-f"></i></a>
                            <a href="/"><i className="fab icon fa-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                </section>                
            </div>
        )
    }
}
