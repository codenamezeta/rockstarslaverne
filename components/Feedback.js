import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  nav: true,
  dots: false,
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

class Feedback extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }
  render() {
    return (
      <section id='testimonials' className='feedback-area-two pt-0 ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>What Our Fans Say About Us</h2>
            <div className='bar'></div>
            <p>
              We're extremely proud that so many students, parents, friends, and
              colleagues think of Rockstars La Verne as their second home. We
              hope you will too.
            </p>
          </div>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='feedback-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img
                      src={require('../images/zeta/Kaelyn.png')}
                      alt='client'
                    />
                    <p>
                      This place is AMAZING! The whole staff is so nice and
                      really makes learning an instrument so fun. I would
                      totally recommend going here. I personally go here and
                      Michal Zeta is an amazing teacher he will personally
                      connect with you and make going there like a safe space.
                      Everyone there is still super nice I just wanted to give a
                      special shout-out to him. I love Rockstars of Tomorrow and
                      it’s like my second home!
                    </p>

                    <div className='client-info'>
                      <h3>Kaelyn B.</h3>
                      <span><a href="https://www.google.com/search?q=rockstars+of+tomorrow+la+verne&oq=rockstars+of+tomorrow+la+verne&aqs=chrome..69i57j69i60j69i61j69i60.4830j0j4&sourceid=chrome&ie=UTF-8#lrd=0x80c32f7d4b2bed15:0xe9feabccc14ce1f,1,,," rel='noopener noreferer' target='_blank'>Google</a></span>
                      
                    </div>

                    <i className='fas fa-quote-left'></i>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img
                      src={require('../images/zeta/virgina.jpg')}
                      alt='client'
                    />
                    <p>
                      Our boys attend Rockstars La Verne and love it. The boys
                      have taken Lessons from Michael Zeta, Kevin Shannon, and
                      Christina and they are all excellent instructors.
                    </p>

                    <div className='client-info'>
                      <h3>Virginia A.</h3>
                      <span><a href="https://www.facebook.com/rockstarslaverne/reviews/" rel='noopener noreferer' target='_blank'>Facebook</a></span>
                    </div>

                    <i className='fas fa-quote-left'></i>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img
                      src={require('../images/zeta/christine.jpg')}
                      alt='client'
                    />
                    <p>
                      Our family LOVES the Rockstars of La Verne family. Our
                      instructors, Michael and Kevin, are fun, encouraging,
                      talented and genuinely good guys. The management team of
                      Brian and Robert are always there to welcome you and offer
                      their help in any way possible. Their goal is to make your
                      kid (or adult) a confident musician. Happy, happy
                      customer.
                    </p>

                    <div className='client-info'>
                      <h3>Christine W.</h3>
                      <span><a href="https://www.facebook.com/rockstarslaverne/reviews/" rel='noopener noreferer' target='_blank'>Facebook</a></span>
                    </div>

                    <i className='fas fa-quote-left'></i>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img
                      src={require('../images/zeta/krista.jpg')}
                      alt='client'
                    />
                    <p>
                      My 6yr old son started group guitar lessons soon after
                      this location opened. The 1st time we walked in for a tour
                      we felt so welcomed and inspired. I wanted my son to have
                      a fun, positive experience and this is exactly what we get
                      here. We come weekly and feel comfortable and supported in
                      this music journey. I highly recommend this location and
                      can't wait to see how my son grows both musically and with
                      his confidence.
                    </p>

                    <div className='client-info'>
                      <h3>Krista C.</h3>
                      <span><a href='https://www.yelp.com/biz/rockstars-of-tomorrow-la-verne' rel='noopener noreferer' target='_blank'>Yelp</a></span>
                    </div>

                    <i className='fas fa-quote-left'></i>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img
                      src={require('../images/zeta/gina.jpg')}
                      alt='client'
                    />
                    <p>
                      We love this place. I have 2 kids that take lessons here
                      and they are progressing very well. I love the warm
                      environment and the encouragement they get from their
                      teacher and their owners. This place is definitely
                      expensive but worth it. They're getting the education of a
                      lifetime here. They can play and instrument and they're
                      getting experience performing in front of people.
                      Awesome!!!!
                    </p>

                    <div className='client-info'>
                      <h3>Gina M.</h3>
                      <span><a href="https://www.facebook.com/rockstarslaverne/reviews/" rel='noopener noreferer' target='_blank'>Facebook</a></span>
                    </div>

                    <i className='fas fa-quote-left'></i>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img
                      src={require('../images/zeta/billie.jpg')}
                      alt='client'
                    />
                    <p>Hands down the best place for music lessons!!!</p>

                    <div className='client-info'>
                      <h3>Billie S.</h3>
                      <span><a href="https://www.facebook.com/rockstarslaverne/reviews/" rel='noopener noreferer' target='_blank'>Facebook</a></span>
                    </div>

                    <i className='fas fa-quote-left'></i>
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

export default Feedback
