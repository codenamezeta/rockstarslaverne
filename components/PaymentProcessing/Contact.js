import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="payment-processing-contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-content-box">
                                <h3>Ready to get Started?</h3>
                                <p>No setup costs or contract - start taking payments today</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-connect">
                                <a href="#" className="btn btn-primary">Sign Up Now</a>
                                <a href="mailto:pluck@gmail.com" className="talk-to-sales">Talk to Sales</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
