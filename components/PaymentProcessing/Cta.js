import React, { Component } from 'react';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area-five ptb-100 bg-f5fbff">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="cta-content-five">
                                <span>Smart Payment</span>
                                <h2>Remove payment pains with Direct Debit</h2>
                                <p>This should be used to tell a story about your product or service. How can you benefit them?</p>

                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="box">
                                            <i className="fas fa-car-side"></i>
                                            <h3>One Fee</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="box">
                                            <i className="far fa-frown-open"></i>
                                            <h3>Hassle Free</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="box">
                                            <i className="fas fa-car"></i>
                                            <h3>Maintenance</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="cta-image">
                                <img src={require("../../images/man-and-women.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
