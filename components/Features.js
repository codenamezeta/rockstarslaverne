import React, { Component } from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Features extends Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true,
    }).init()
  }

  render() {
    return (
      <section id='features' className='features-area-two ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Scheduling &amp; Billing Made Simple</h2>
            <div className='bar'></div>
            <p>
              Rockstars Of Tomorrow La Verne is proud to work with{' '}
              <a className='inline-a' href='https://www.mymusicstaff.com/'>
                My Music Staff
              </a>
              , the #1 music studio software. Easily &amp; securely manage
              scheduling, billing and much more for your account as well as your
              child's account at anytime from any device.
            </p>
          </div>

          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='features-content'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/home'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Manage Schedule</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/accounts-and-invoices'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>View Invoice History</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/profile-settings'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Setup Notifications</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/accounts-and-invoices'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Make Payments Online</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/online-resources'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Collect Learning Resources</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/information'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Contact Instructors</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/attendance-and-notes'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>View Attendance Reports</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/practice-log'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Log Student Practice</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/calendar'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Track Makeup Lessons</div>
                    </a>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/calendar'
                      target='_blank'
                      rel='noopener noreferer'
                    >
                      <div className='box'>Enroll In Programs</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='features-image'>
                <img
                  src={require('../images/zeta/mms-graphic-01.png')}
                  className='wow fadeIn'
                  data-wow-delay='0.6s'
                  alt='main-pic'
                />
                {/* <img
                  src={require('../../images/circle-shape.png')}
                  className='rotate-image rotateme'
                  alt='circle'
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Features
