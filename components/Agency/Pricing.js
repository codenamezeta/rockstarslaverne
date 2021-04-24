import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="pricing-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Pricing</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img src={require('../../images/icon1.png')} alt="icon" />
                                    </div>

                                    <h3>Basic Plan</h3>
                                </div>

                                <ul className="pricing-features">
                                    <li className="active">5 GB Bandwidth</li>
                                    <li className="active">Highest Speed</li>
                                    <li className="active">1 GB Storage</li>
                                    <li className="active">Unlimited Website</li>
                                    <li className="active">Unlimited Users</li>
                                    <li className="active">24x7 Great Support</li>
                                    <li className="unactive">Data Security and Backups</li>
                                    <li className="unactive">Monthly Reports and Analytics</li>
                                </ul>

                                <div className="price">
                                    $549
                                    <span>Per month</span>
                                </div>

                                <a href="#" className="btn btn-primary">Select</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table active">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img src={require('../../images/icon2.png')} alt="icon" />
                                    </div>

                                    <h3>Advanced Plan</h3>
                                </div>

                                <ul className="pricing-features">
                                    <li className="active">10 GB Bandwidth</li>
                                    <li className="active">Highest Speed</li>
                                    <li className="active">2 GB Storage</li>
                                    <li className="active">Unlimited Website</li>
                                    <li className="active">Unlimited Users</li>
                                    <li className="active">24x7 Great Support</li>
                                    <li className="active">Data Security and Backups</li>
                                    <li className="unactive">Monthly Reports and Analytics</li>
                                </ul>

                                <div className="price">
                                    $749
                                    <span>Per month</span>
                                </div>

                                <a href="#" className="btn btn-primary">Select</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img src={require('../../images/icon3.png')} alt="icon" />
                                    </div>

                                    <h3>Expert Plan</h3>
                                </div>

                                <ul className="pricing-features">
                                    <li className="active">15 GB Bandwidth</li>
                                    <li className="active">Highest Speed</li>
                                    <li className="active">3 GB Storage</li>
                                    <li className="active">Unlimited Website</li>
                                    <li className="active">Unlimited Users</li>
                                    <li className="active">24x7 Great Support</li>
                                    <li className="active">Data Security and Backups</li>
                                    <li className="active">Monthly Reports and Analytics</li>
                                </ul>

                                <div className="price">
                                    $949
                                    <span>Per month</span>
                                </div>

                                <a href="#" className="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;
