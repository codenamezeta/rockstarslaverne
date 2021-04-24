import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class Testimonials extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section id="testimonials" className="feedback-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our customer feedback</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src={require('../../images/client1.png')} alt="client" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <div className="client-info">
                                        <h3>Jason Sthatham</h3>
                                        <span>CEO ThemeForest</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src={require('../../images/client2.png')} alt="client" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <div className="client-info">
                                        <h3>Steven Smith</h3>
                                        <span>CEO EnvyTheme</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src={require('../../images/client3.png')} alt="client" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <div className="client-info">
                                        <h3>David Warner</h3>
                                        <span>CEO Company</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
