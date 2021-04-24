import React, { Component } from 'react'
// import Widget from './Widget'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  nav: true,
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

class Services extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    return (
      <section id='services' className='services-area ptb-100'>
        <div className='container'>
          <div className='lead-generation-section-title'>
            <span>Services</span>
            <h2>We Offer Many Services to Our Great Customers</h2>
            <div className='bar'></div>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='services-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src={require('../../images/blog1.jpg')} alt='blog' />

                    <div className='services-content'>
                      <h3>Creative Design</h3>
                      <p>
                        This should be used to tell a story and talk about your
                        product.
                      </p>

                      <ul>
                        <li>IT Solution</li>
                        <li>Web Design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src={require('../../images/blog2.jpg')} alt='blog' />

                    <div className='services-content'>
                      <h3>Ultra Responsive</h3>
                      <p>
                        This should be used to tell a story and talk about your
                        product.
                      </p>

                      <ul>
                        <li className='bg-cdf1d8'>IT Solution</li>
                        <li className='bg-cdf1d8'>Web Design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src={require('../../images/blog3.jpg')} alt='image' />

                    <div className='services-content'>
                      <h3>No Coding Required</h3>
                      <p>
                        This should be used to tell a story and talk about your
                        product.
                      </p>

                      <ul>
                        <li className='bg-f78acb'>IT Solution</li>
                        <li className='bg-f78acb'>Web Design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src={require('../../images/blog4.jpg')} alt='image' />

                    <div className='services-content'>
                      <h3>Retina Ready</h3>
                      <p>
                        This should be used to tell a story and talk about your
                        product.
                      </p>

                      <ul>
                        <li className='bg-c679e3'>IT Solution</li>
                        <li className='bg-c679e3'>Web Design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src={require('../../images/blog5.jpg')} alt='image' />

                    <div className='services-content'>
                      <h3>Drag and Drop</h3>
                      <p>
                        This should be used to tell a story and talk about your
                        product.
                      </p>

                      <ul>
                        <li className='bg-eb6b3d'>IT Solution</li>
                        <li className='bg-eb6b3d'>Web Design</li>
                      </ul>
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

export default Services
