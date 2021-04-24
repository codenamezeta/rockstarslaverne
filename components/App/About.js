import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about-box">
                                <div className="icon">
                                    <i className="fas fa-camera"></i>
                                </div>
                                <h3>Camera Filter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-about-box">
                                <div className="icon">
                                    <i className="fas fa-fighter-jet"></i>
                                </div>
                                <h3>Fast and optimized</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-about-box">
                                <div className="icon">
                                    <i className="far fa-hand-pointer"></i>
                                </div>
                                <h3>Drag and Drop</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-inner-area">
                    <div className="container-fluid">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../../images/laptop.png")} alt="about" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-inner-content">
                                    <div className="about-item">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <h3>Free Caliing Service</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="about-item">
                                        <div className="icon">
                                            <i className="fas fa-gift"></i>
                                        </div>
                                        <h3>Daily Free Gift</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="about-item">
                                        <div className="icon">
                                            <i className="fas fa-qrcode"></i>
                                        </div>
                                        <h3>QR Code Scaner</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
