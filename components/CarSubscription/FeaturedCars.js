import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
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

class FeaturedCars extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section className="featured-cars ptb-100 bg-f5fbff">
                <div className="container">
                    <div className="car-subscription-section-title">
                        <span>Featured Cars?</span>
                        <h2>Featured Cars for Subscription</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="featured-cars-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src={require("../../images/featured-cars1.jpg")} alt="cars" />

                                    <div className="featured-cars-content">
                                        <h3><a href="#">2015 Toyota Corolla</a></h3>
                                        <span>from $450/mo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src={require("../../images/featured-cars2.jpg")} alt="cars" />

                                    <div className="featured-cars-content">
                                        <h3><a href="#">2015 Toyota Corolla</a></h3>
                                        <span>from $450/mo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src={require("../../images/featured-cars3.jpg")} alt="cars" />

                                    <div className="featured-cars-content">
                                        <h3><a href="#">2015 Toyota Corolla</a></h3>
                                        <span>from $450/mo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src={require("../../images/featured-cars2.jpg")} alt="cars" />

                                    <div className="featured-cars-content">
                                        <h3><a href="#">2015 Toyota Corolla</a></h3>
                                        <span>from $450/mo</span>
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

export default FeaturedCars;
