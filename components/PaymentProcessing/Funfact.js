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
            <section className="payment-processing-funfacts ptb-100 jaralax" data-jarallax='{"speed": 0.2}'>
                <div className="container">
                    <div className="funfacts-inner">
                        <div className="single-funfacts-box">
                            <p>Trusted by</p>
                            <h3><span className="odometer" data-count="99000">
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
                            </span>K</h3>
                            <p>Businesses</p>
                        </div>

                        <div className="single-funfacts-box">
                            <p>Processing</p>
                            <h3>$<span className="odometer" data-count="50">
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
                            </span>B</h3>
                            <p>Businesses</p>
                        </div>

                        <div className="single-funfacts-box">
                            <p>Trusted by</p>
                            <h3><span className="odometer" data-count="654">
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
                            </span>K</h3>
                            <p>Software Platform Integrations</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Funfact;
