import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div id="home" className="car-subscription-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="car-subscription-banner-content">
                                        <h1>Own the moment, not the car!</h1>
                                        <p>It should be noted that although application software is thought of as a program, it can be anything that runs on a computer.</p>

                                        <form>
                                            <input type="text" className="form-control" placeholder="Enter email adrees" />
                                            <button type="submit" className="btn btn-primary">Subscribe Now!</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="car-subscription-banner-image">
                    <img src={require("../../images/car-with-man.png")} alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;
