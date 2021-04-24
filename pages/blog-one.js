import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';

class BlogOne extends Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-style-one navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={require("../images/white-logo.png")} alt="logo" />
                            <img src={require("../images/black-logo.png")} alt="logo" />
                        </a>

                        <button 
                            onClick={this.toggleNavbar}
                            className={classTwo}  
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#features">Features</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#testimonials">Testimonials</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#pricing">Pricing</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#blog">News</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
                            </ul>

                            <ul className="others-option">
                                <li><a href="/signin" className="btn btn-primary">sign in</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="page-title-area jarallax" data-jarallax='{"speed": 0.2}'>
                    <div className="container">
                        <h2>Blog</h2>
                    </div>
                </section>

                <section className="blog-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-item">
                                    <div className="blog-image">
                                        <a href="#">
                                            <img src={require("../images/blog1.jpg")} alt="imblogage" />
                                        </a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Feb, 2019</span>
                                        <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-item">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog2.jpg")} alt="blog" /></a>

                                        <div className="post-tag">
                                            <a href="#">Agency</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">27 Feb, 2019</span>
                                        <h3><a href="#">The Best Marketing top use Management Tools</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-item">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog3.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">IT</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">28 Feb, 2019</span>
                                        <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-item">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog4.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Creative</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">29 Feb, 2019</span>
                                        <h3><a href="#">Top 21 Must-Read Blogs For Creative Agencies</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-item">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog5.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Feb, 2019</span>
                                        <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-item">
                                    <div className="blog-image">
                                        <a href="#"><img src={require("../images/blog6.jpg")} alt="image" /></a>

                                        <div className="post-tag">
                                            <a href="#">Agency</a>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">27 Feb, 2019</span>
                                        <h3><a href="#">The Best Marketing top use Management Tools</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                            <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogOne;
