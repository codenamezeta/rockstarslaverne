import React, { Component } from 'react';

class HowWorks extends Component {
    render() {
        return (
            <section id="how-it-works" className="how-it-works ptb-100">
                <div className="container">
                    <div className="payment-processing-section-title">
                        <span>Process</span>
                        <h2>How It Works</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <span>.01</span>
                                <h3>Add Customers</h3>
                                <p>This should be used to tell a story and talk about your product.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <span>.02</span>
                                <h3>Schedule Payments</h3>
                                <p>This should be used to tell a story and talk about your product.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-work-process">
                                <span>.03</span>
                                <h3>Collect on due Dates</h3>
                                <p>This should be used to tell a story and talk about your product.</p>
                            </div>
                        </div>
                    </div>

                    <div className="alert-info-box">
                        <a href="#">Learn more about collecting Invoice payments <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowWorks;
