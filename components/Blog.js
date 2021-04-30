import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
}

class Blog extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }
  render() {
    return (
      <section id='blog' className='blog-area ptb-100 bg-main'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Latest News</h2>
            <div className='bar'></div>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='blog-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='single-blog-item'>
                    <div className='blog-image'>
                      <Link href='#'>
                        <a>
                          <img
                            src={require('../../images/blog1.jpg')}
                            alt='blog'
                          />
                        </a>
                      </Link>

                      <div className='post-tag'>
                        <a href='#'>Technology</a>
                      </div>
                    </div>

                    <div className='blog-post-content'>
                      <span className='date'>25 Feb, 2019</span>
                      <h3>
                        <a href='#'>The Most Popular New top Business Apps</a>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                      <Link href='#'>
                        <a className='read-more-btn'>
                          Read More <i className='icofont-double-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-blog-item'>
                    <div className='blog-image'>
                      <Link href='#'>
                        <a>
                          <img
                            src={require('../../images/blog2.jpg')}
                            alt='blog'
                          />
                        </a>
                      </Link>

                      <div className='post-tag'>
                        <a href='#'>Agency</a>
                      </div>
                    </div>

                    <div className='blog-post-content'>
                      <span className='date'>27 Feb, 2019</span>
                      <h3>
                        <a href='#'>
                          The Best Marketing top use Management Tools
                        </a>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                      <Link href='#'>
                        <a className='read-more-btn'>
                          Read More <i className='icofont-double-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-blog-item'>
                    <div className='blog-image'>
                      <Link href='#'>
                        <a>
                          <img
                            src={require('../../images/blog3.jpg')}
                            alt='blog'
                          />
                        </a>
                      </Link>

                      <div className='post-tag'>
                        <a href='#'>IT</a>
                      </div>
                    </div>

                    <div className='blog-post-content'>
                      <span className='date'>28 Feb, 2019</span>
                      <h3>
                        <a href='#'>3 WooCommerce Plugins to Boost Sales</a>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                      <Link href='#'>
                        <a className='read-more-btn'>
                          Read More <i className='icofont-double-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-blog-item'>
                    <div className='blog-image'>
                      <Link href='#'>
                        <a>
                          <img
                            src={require('../../images/blog4.jpg')}
                            alt='blog'
                          />
                        </a>
                      </Link>

                      <div className='post-tag'>
                        <a href='#'>Creative</a>
                      </div>
                    </div>

                    <div className='blog-post-content'>
                      <span className='date'>29 Feb, 2019</span>
                      <h3>
                        <a href='#'>
                          Top 21 Must-Read Blogs For Creative Agencies
                        </a>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                      <Link href='#'>
                        <a className='read-more-btn'>
                          Read More <i className='icofont-double-right'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Blog
