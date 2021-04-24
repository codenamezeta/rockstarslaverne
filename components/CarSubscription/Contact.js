import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="car-subscription-contact-area bg-f5fbff">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-box">
                                <h3>Ready to go?</h3>
                                <a href="#" className="btn btn-primary">Browse Cars</a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="contact-box">
                                <h3>Have question?</h3>
                                <ul>
                                    <li><a href="#">Read our FAQ</a></li>
                                    <li><a href="#">support@pluck.com</a></li>
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
