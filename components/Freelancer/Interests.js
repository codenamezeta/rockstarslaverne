import React, { Component } from 'react';

class Interests extends Component {
    render() {
        return (
            <section className="my-interests ptb-100 pt-0">
                <div className="container">
                    <div className="freelancer-section-title">
                        <h2>My <span>Interests</span></h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                            <div className="single-interests">
                                <i className="fas fa-gamepad"></i>
                                <h3>Gaming</h3>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="single-interests">
                                <i className="fas fa-book"></i>
                                <h3>Reading</h3>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="single-interests">
                                <i className="fas fa-music"></i>
                                <h3>Music</h3>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="single-interests">
                                <i className="fas fa-film"></i>
                                <h3>Movies</h3>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="single-interests">
                                <i className="fas fa-shopping-cart"></i>
                                <h3>Shopping</h3>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="single-interests">
                                <i className="fas fa-bicycle"></i>
                                <h3>Bicycling</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Interests;
