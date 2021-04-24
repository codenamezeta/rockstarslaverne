import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <section id="services" className="services-area-two ptb-100">
                <div className="container">
                    <div className="car-subscription-section-title">
                        <span>Services</span>
                        <h2>What’s included in a Pluck Subscription?</h2>
                        <img src={require("../../images/car-icon.png")} alt="services" />
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src={require("../../images/car-services1.jpg")} alt="services" />

                                <div className="services-content">
                                    <h3>Free Delivery</h3>
                                    <p>This should be used to tell a story and talk about your product.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src={require("../../images/car-services2.jpg")} alt="services" />

                                <div className="services-content">
                                    <h3>Switch Cars</h3>
                                    <p>This should be used to tell a story and talk about your product.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src={require("../../images/car-services3.jpg")} alt="services" />

                                <div className="services-content">
                                    <h3>Choice</h3>
                                    <p>This should be used to tell a story and talk about your product.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src={require("../../images/car-services4.jpg")} alt="services" />

                                <div className="services-content">
                                    <h3>Insurance</h3>
                                    <p>This should be used to tell a story and talk about your product.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src={require("../../images/car-services5.jpg")} alt="services" />

                                <div className="services-content">
                                    <h3>Service & Registration</h3>
                                    <p>This should be used to tell a story and talk about your product.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src={require("../../images/car-services6.jpg")} alt="services" />

                                <div className="services-content">
                                    <h3>No Surprises</h3>
                                    <p>This should be used to tell a story and talk about your product.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
