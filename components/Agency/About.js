import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={require('../../images/about-img1.jpg')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Make your website more powerful</h2>
                                <p>We Design & Develop Websites that stand out of the crowd. Alea is an extremely feature rich, beautiful WordPress Template.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-desktop"></i>
                                                </div>

                                                <h3>Friendly Interface</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-tasks"></i>
                                                </div>

                                                <h3>powerful Options</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-code"></i>
                                                </div>

                                                <h3>Organized Code</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-headset"></i>
                                                </div>

                                                <h3>Premium Support</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle"><img src={require('../../images/circle.png')} alt="cricle" /></div>
            </section>
        );
    }
}

export default About;
