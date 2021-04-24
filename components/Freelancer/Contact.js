import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="contact-content">
                                <h3>Leave a <span>Message</span></h3>
                                <h6>This is Photoshop’s version  of Lorem Ipsum. Proin nibh vel velit auctor aliquet aenean.</h6>
                                <p>Lorem ipsum dolor sit amet libero adipiscing elit dolor sit amet adipiscing elit. Proin gravida nibh vel velit auctor aliquet. Itudin, lorem quis bibendum auctor. Nisi elit consequat ipsum, sagittis sem nibh id elit. Duis sed odio sit.</p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <form id="contactForm" className="freelancer-contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Name" className="form-control" required data-error="Please enter your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" placeholder="Email" className="form-control" required data-error="Please enter your email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder="Message" className="form-control" cols="30" rows="5" required data-error="Write your message" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
