import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';

class BlogTwo extends Component {
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
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <a href="#"><img src={require("../images/blog1.jpg")} alt="image" /></a>

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

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <a href="#"><img src={require("../images/blog2.jpg")} alt="image" /></a>

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

                                    <div className="col-lg-6 col-md-6">
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

                                    <div className="col-lg-6 col-md-6">
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

                                    <div className="col-lg-6 col-md-6">
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

                                    <div className="col-lg-6 col-md-6">
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

                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="form-control" placeholder="Search here..." />
                                            <button type="submit"><i className="icofont-search"></i></button>
                                        </form>
                                    </div>
                                    
                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">
                                            Categories
                                        </h3>

                                        <ul>
                                            <li><a href="#">AJAX</a></li>
                                            <li><a href="#">Apache</a></li>
                                            <li><a href="#">CSS</a></li>
                                            <li><a href="#">PHP</a></li>
                                            <li><a href="#">Django</a></li>
                                            <li><a href="#">Error</a></li>
                                            <li><a href="#">IIS</a></li>
                                            <li><a href="#">JavaScript</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">
                                            Recent Posts
                                        </h3>

                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog1.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">The Most Popular New top Business Apps</a></h5>
                                                <p className="date">21 March, 2019</p>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog2.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">3 WooCommerce Plugins to Boost Sales</a></h5>
                                                <p className="date">20 March, 2019</p>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog3.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">The Best Marketing top use Management Tools</a></h5>
                                                <p className="date">27 March, 2019</p>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <img src={require("../images/blog4.jpg")} alt="image" />
                                                </a>

                                                <h5><a href="#">Top 21 Must-Read Blogs For Creative Agencies</a></h5>
                                                <p className="date">27 January, 2019</p>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_tag_cloud">
                                        <h3 className="widget-title">
                                            Tags
                                        </h3>

                                        <div className="tagcloud">
                                            <a href="#">Error</a>
                                            <a href="#">Cake Bake</a>
                                            <a href="#">Dromzone</a>
                                            <a href="#">File</a>
                                            <a href="#">Yii</a>
                                            <a href="#">Yii2</a>
                                            <a href="#">UUID</a>
                                            <a href="#">Setup</a>
                                            <a href="#">Error</a>
                                            <a href="#">Cake Bake</a>
                                            <a href="#">Dromzone</a>
                                            <a href="#">File</a>
                                            <a href="#">Yii</a>
                                            <a href="#">Yii2</a>
                                            <a href="#">UUID</a>
                                            <a href="#">Setup</a>
                                        </div>
                                    </div>
                                    
                                    <div className="widget widget_archive">
                                        <h3 className="widget-title">
                                            Archives
                                        </h3>

                                        <ul>
                                            <li><a href="#">December 2018</a></li>
                                            <li><a href="#">January 2019</a></li>
                                            <li><a href="#">February 2019</a></li>
                                            <li><a href="#">March 2019</a></li>
                                        </ul>
                                    </div>
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

export default BlogTwo;
