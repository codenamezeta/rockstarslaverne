import React, { Component } from 'react';

class Platform extends Component {
    render() {
        return (
            <section className="platform-connect ptb-100 pt-0">
                <div className="container">
                    <div className="payment-processing-section-title">
                        <span>Connect with Us</span>
                        <h2>Interact With Your Users On Every Single Platform</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <a href="#" className="platform-box">
                                <img src={require("../../images/mailchimp.png")} alt="mailchimp" />

                                <h3>Mail Chimp</h3>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <a href="#" className="platform-box">
                                <img src={require("../../images/slack.png")} alt="slack" />

                                <h3>Slack</h3>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <a href="#" className="platform-box">
                                <img src={require("../../images/twitter.png")} alt="twitter" />

                                <h3>Twitter</h3>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <a href="#" className="platform-box">
                                <img src={require("../../images/instagram.png")} alt="instagram" />

                                <h3>Instagram</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Platform;
