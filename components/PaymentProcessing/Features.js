import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="features" className="payment-processing-features ptb-100 bg-f5fbff">
                    <div className="container">
                        <div className="payment-processing-section-title">
                            <span>Services</span>
                            <h2>Our Features</h2>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-search-dollar"></i>
                                    <h3>Advanced Fraud Detection</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fab fa-shirtsinbulk"></i>
                                    <h3>Customer Information Manager</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-money-check"></i>
                                    <h3>Payment Types</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-user-circle"></i>
                                    <h3>Account Updater</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-file-invoice-dollar"></i>
                                    <h3>Invoicing</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-hand-point-up"></i>
                                    <h3>Simple Checkout</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="start-now-area ptb-100 pb-0">
                    <div className="container">
                        <div className="start-now-content">
                            <span>Sell Smarter</span>
                            <h2>Accept Payments Online. Get Paid Faster.</h2>
                            <p>Keep track of all your payments using our beautifully designed payments dashboard. With all your payment information in one place, you'll be a more organized and efficient business owner.</p>
                            <a href="#" className="btn btn-primary">Start Now!</a>
                        </div>

                        <div className="dashboard-image">
                            <img src={require("../../images/banner-chart-home.jpg")} alt="image" />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;
