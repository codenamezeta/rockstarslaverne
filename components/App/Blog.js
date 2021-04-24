import React, { Component } from 'react';
import Link from 'next/link';

class Blog extends Component {
    render() {
        return (
            <section id="blog" className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Latest News</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <img src={require("../../images/agency-blog1.jpg")} alt="image" />
                                </div>

                                <div className="blog-post-content">
                                    <h3><a href="#">How to Document Processes to Scale Your Agency</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <img src={require("../../images/agency-blog2.jpg")} alt="image" />
                                </div>

                                <div className="blog-post-content">
                                    <h3><a href="#">15 Employee Feedback Tools to Track Your Team</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="image">
                                    <img src={require("../../images/agency-blog3.jpg")} alt="image" />
                                </div>

                                <div className="blog-post-content">
                                    <h3><a href="#">12 Tried-and-True Ways to Improve User</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
