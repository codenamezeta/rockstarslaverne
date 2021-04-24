import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <section className="lead-generation-features ptb-100 bg-f5fbff">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="lead-generation-features-content">
                                <span>Our Features</span>
                                <h2>We Provide The Solutions To Grow Your Business</h2>
                                <p>This should be used to tell a story about your product or service. How can you benefit them?</p>

                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="box">
                                            <i className="fas fa-code"></i>
                                            <h3>Clean Code</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="box">
                                            <i className="fab fa-android"></i>
                                            <h3>Android App</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="box">
                                            <i className="fas fa-pencil-ruler"></i>
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="lead-generation-features-image">
                                <img src={require("../../images/man-and-women.png")} alt="Features" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
