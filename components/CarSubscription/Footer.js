import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area-four">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="#"><img src={require("../../images/white-logo.png")} alt="logo" /></a>
                                </div>
        
                                <ul className="contact-info">
                                    <li>1828 Johns Drive Glenview, IL 60025</li>
                                    <li><a href="#">(224) 228-8475</a></li>
                                    <li><a href="#">support@pluck.com</a></li>
                                    <li><a href="#">www.pluck.com</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer-widget pl-3">
                                <h3>Quick Links</h3>
        
                                <ul className="list">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Screenshots</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Support</h3>
        
                                <ul className="list">
                                    <li><a href="#">Quick Support</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Copyright</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>My Account</h3>

                                <ul className="list">
                                    <li><a href="#">Managed Account</a></li>
                                    <li><a href="#">Create Account</a></li>
                                    <li><a href="#">Download Software</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Account Security</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <p><i className="far fa-copyright"></i> 2019 <a href="/">Genial</a>. All Rights Reserved</p>
                            </div>

                            <div className="col-lg-5 col-md-5">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
