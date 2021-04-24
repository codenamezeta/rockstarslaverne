import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <section className="funfacts-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="single-funfact">
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 555
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Completed Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <div className="single-funfact">
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 250048
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Lines Code</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <div className="single-funfact">
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 250
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Team Members</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <div className="single-funfact">
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 2045
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                </h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Funfact;
