import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" required={true} data-error="Please enter your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" required={true} data-error="Please enter your email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" required={true} data-error="Please enter your subject" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" required={true} data-error="Please enter your number" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" cols="30" rows="4" required={true} data-error="Write your message" />
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

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-info-box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Address:</span>

                                        1828 Johns Drive Glenview, IL 60025
                                    </li>

                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>Email:</span>
                                        
                                        <a href="#">support@pluck.com</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>Phone:</span>
                                        
                                        <a href="#">(224) 228-8475</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-globe"></i>
                                        <span>Website:</span>
                                        
                                        <a href="#">www.pluck.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
