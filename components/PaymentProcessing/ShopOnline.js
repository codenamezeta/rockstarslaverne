import React, { Component } from 'react';

class ShopOnline extends Component {
    render() {
        return (
            <section className="shop-online-area ptb-100">
                <div className="container">
                    <div className="payment-processing-section-title">
                        <span>Shopping</span>
                        <h2>Shop 50 million online stores and counting.</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="shop-online-image">
                                <img src={require("../../images/man-and-women.png")} alt="shop" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <i className="fas fa-money-check"></i>
                                <h3>Shop your favorite brands.</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <i className="fas fa-shopping-cart"></i>
                                <h3>Who shops the world? You.</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-item">
                                <i className="fas fa-headset"></i>
                                <h3>Buy with confidence.</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopOnline;
