import React, { Component } from 'react'
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

class Services extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    return (
      <section className='services-area ptb-100 pt-0'>
        <div className='container'>
          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='services-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <i className='fas fa-laptop'></i>
                    <h3>Web Design</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <i className='fas fa-mobile-alt'></i>
                    <h3>Mobile Development</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <i className='fas fa-rocket'></i>
                    <h3>Branding Identity</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <i className='fas fa-camera'></i>
                    <h3>Photography</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <i className='fab fa-sketch'></i>
                    <h3>Sketch</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
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
