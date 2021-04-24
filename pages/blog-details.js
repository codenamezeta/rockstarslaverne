import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';

class BlogDetails extends Component {
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
                        <h2>Blog Details</h2>
                    </div>
                </section>

                <section className="blog-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="blog-details">
                                    <div className="post-image">
                                        <img src={require("../images/blog1.jpg")} alt="image" />
                                    </div>

                                    <h3>The Most Popular New top Business Apps</h3>

                                    <div className="blog-meta">
                                        <ul>
                                            <li><i className="fas fa-user"></i> <a href="#">Admin</a></li>
                                            <li><i className="far fa-clock"></i> June 20, 2019</li>
                                            <li><i className="far fa-comment-dots"></i> <a href="#">6 Comments</a></li>
                                            <li><i className="fas fa-folder-open"></i> <a href="#">Event</a></li>
                                        </ul>
                                    </div>
                                    
                                    <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn’t anything of embarrassing. There are many that an variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by a injected humour or randomised words which don’t look even of slightly believable. If you are going to use a the passage of Lorem Ipsum you need to be sure there isn’t anything embarrassing.</p>

                                    <blockquote className="blockquote">
                                        <p>There are many variations of passages of Lorem the Ipsum available but the that as that majority have is suffered alteration.</p>
                                    </blockquote>

                                    <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn’t anything of embarrassing.</p>

                                    <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn’t anything of embarrassing.</p>

                                    <p>Randomised words which don’t look even slightly believable. If you are going a to use a passage you need to be sure there isn’t anything embarrassing. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                
                                <div className="post-tag-media">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-lg-6 col-md-7">
                                            <ul className="tag">
                                                <li><span>Tags:</span></li>
                                                <li><a href="#">Event,</a></li>
                                                <li><a href="#">App,</a></li>
                                                <li><a href="#">Software</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-6 col-md-5">
                                            <ul className="social-share">
                                                <li><span>Share on:</span></li>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div id="comments" className="comments-area">
                                    <h2 className="comments-title">3 Comments</h2>

                                    <ol className="comment-list">
                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src={require("../images/author1.jpg")} alt="image" className="avatar" />
                                                        <b className="fn">John Smith</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <a href="#">
                                                            March 28, 2019 at 7:16 am
                                                        </a>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" rel="nofollow" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src={require("../images/author2.jpg")} alt="image" className="avatar" />
                                                                <b className="fn">Steven Warner</b>
                                                                <span className="says">says:</span>
                                                            </div>

                                                            <div className="comment-metadata">
                                                                <a href="#">
                                                                    March 28, 2019 at 7:16 am
                                                                </a>
                                                            </div>
                                                        </footer>

                                                        <div className="comment-content">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                        </div>

                                                        <div className="reply">
                                                            <a href="#" rel="nofollow" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </article>
                                                </li>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src={require("../images/author3.jpg")} alt="image" className="avatar" />
                                                        <b className="fn">John Smith</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <a href="#">
                                                            March 28, 2019 at 7:16 am
                                                        </a>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" rel="nofollow" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>
                                        </li>
                                    </ol>

                                    <div id="respond" className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form id="commentform" className="comment-form">
                                            <p className="comment-notes">Your email address will not be published.</p>
                                            
                                            <p className="comment-form-comment">
                                                <textarea id="comment" placeholder="Comment" cols="45" rows="4" />
                                            </p>
                                            <p className="comment-form-author">
                                                <input id="author" placeholder="Name" type="text" />
                                            </p>
                                            <p className="comment-form-email">
                                                <input id="email" placeholder="Email"  type="text" />
                                            </p>
                                            <p className="comment-form-url">
                                                <input id="url" placeholder="Website" type="text" />
                                            </p>
                                            <p className="form-submit">
                                                <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                                            </p>
                                        </form>
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

export default BlogDetails;
