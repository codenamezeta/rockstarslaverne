import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:1,
        },
        1024: {
            items:2,
        },
        1200: {
            items:2,
        }
    }
}

class Feedback extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section id="testimonials" className="testimonial-area ptb-100 bg-image">
                <div className="container">
                    <div className="app-section-title">
                        <h2>Whats Say Our <span>Clients</span></h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    
                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="testimonial-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-image">
                                        <img src={require("../../images/author1.jpg")} alt="feedback" />
                                    </div>

                                    <div className="testimonial-content">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                        </div>

                                        <div className="client-info">
                                            <h3>John Smith</h3>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-image">
                                        <img src={require("../../images/author2.jpg")} alt="feedback" />
                                    </div>

                                    <div className="testimonial-content">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                        </div>

                                        <div className="client-info">
                                            <h3>Steven Smith</h3>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-image">
                                        <img src={require("../../images/author3.jpg")} alt="feedback" />
                                    </div>

                                    <div className="testimonial-content">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                        </div>

                                        <div className="client-info">
                                            <h3>Alina Eva</h3>
                                            <span>Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-image">
                                        <img src={require("../../images/author4.jpg")} alt="feedback" />
                                    </div>

                                    <div className="testimonial-content">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                        </div>

                                        <div className="client-info">
                                            <h3>Steven Smith</h3>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Feedback;
