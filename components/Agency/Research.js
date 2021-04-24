import React, { Component } from 'react';

class Research extends Component {
    render() {
        return (
            <section className="ux-research-process ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="research-process-image">
                                <img src={require('../../images/ux-women.jpg')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="research-process-content">
                                <h2>Our UX research process</h2>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <div className="single-process">
                                    <span>1</span>
                                    <h3>Objectives</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                </div>

                                <div className="single-process">
                                    <span>2</span>
                                    <h3>Hypotheses</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                </div>

                                <div className="single-process">
                                    <span>3</span>
                                    <h3>Methods</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                </div>

                                <div className="single-process">
                                    <span>4</span>
                                    <h3>Conduct</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                </div>

                                <div className="single-process">
                                    <span>5</span>
                                    <h3>Synthesis</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Research;
