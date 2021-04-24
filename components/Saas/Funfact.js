import React, { Component } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Link from 'next/link'
import {
  yearsInBiz,
  numOfLessons,
  numOfStudents,
  numOfShows,
  grandOpening,
} from './FunNumbers'

// console.log((new Date().getTime() - grandOpening.getTime()) / 60000)
// console.log(new Date().getTime())

class Funfact extends Component {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }

  render() {
    return (
      <section className='funfacts-area-three ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Inspire, Motivate, &amp; Connect</h2>
            <div className='bar'></div>
            <p>
              We’ve taught hundreds of beginning to advanced musicians how to
              play and rock their instruments. Whether you’re 5 or 105, if you
              want to play, we can guide you and get you out playing live on
              real stages for real audiences.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-3 col-6'>
              <div className='funfact-item'>
                <h3>
                  <span className='odometer' data-count='180'>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? numOfLessons : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </span>
                  +
                </h3>
                <p>Lessons taught</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-6'>
              <div className='funfact-item'>
                <h3>
                  <span className='odometer' data-count='20'>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? numOfStudents : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </span>
                </h3>
                <p>Students Enrolled</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-6'>
              <div className='funfact-item'>
                <h3>
                  <span className='odometer' data-count='500'>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? numOfShows : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </span>
                  +
                </h3>
                <p>Live Shows</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-6'>
              <div className='funfact-item'>
                <h3>
                  <span className='odometer' data-count='70'>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? yearsInBiz : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </span>
                </h3>
                <p>Years In Business</p>
              </div>
            </div>
          </div>

          <div className='contact-cta-box'>
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us.</p>
            <Link href='#'>
              <a className='btn btn-primary'>Contact Us</a>
            </Link>
          </div>
        </div>

        <div className='map-bg'>
          <img src={require('../../images/zeta/stage-01.jpg')} alt='map' />
        </div>
      </section>
    )
  }
}

export default Funfact
