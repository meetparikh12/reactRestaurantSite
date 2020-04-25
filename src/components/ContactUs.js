import React, { Component } from 'react'
import Footer from './Footer'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="ContactUS">
                <section className="probootstrap-section probootstrap-bg-white bg1-pattern spacing" data-section="contact">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 text-center probootstrap-animate">
                            <div className="probootstrap-heading dark">
                            <h1 className="primary-heading tit2 font-change-primary">Contact</h1>
                            <h3 className="secondary-heading font-change">Let's Chat</h3>
                            </div>
                            <p style={{padding : "5%", color: "#8b8e94"}}>Voluptatibus quaerat laboriosam fugit non Ut <br/>consequatur animi est molestiae enim a voluptate <br/>
                            totam natus modi debitis dicta voluptatum <br/>quod sapiente illo saepe explicabo quisquam <br/>perferendis labore et illum suscipit</p>
                        </div>
                        <div className="col-md-6 col-md-push-1 probootstrap-animate">
                            <form method="post" className="probootstrap-form">
                            <div className="form-group">
                                <label for="c_name">Your Name</label>
                                <div className="form-field">
                                <input type="text" id="c_name" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="c_email">Your Email</label>
                                <div className="form-field">
                                <input type="text" id="c_email" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="c_message">Your Message</label>
                                <div className="form-field">
                                <textarea name="c_message" id="c_message" cols="30" rows="10" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="c_submit" id="c_submit" value="Send Message" className="btn btn-primary btn-lg"/>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </section>

                    <Footer/>
            </div>
        )
    }
}
