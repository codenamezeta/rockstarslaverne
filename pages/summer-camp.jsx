import React from 'react'
import JamCampNavbar from '../components/JamCampNavbar'
import JamCampSignupForm from '../components/JamCampSignupForm'
import Footer from '../components/Footer'

export default function HelloWorld() {
  return (
    <>
      <JamCampNavbar />
      <React.Fragment>
        <div
          id='jamcamp'
          className='app-banner'
          style={{ backgroundImage: 'url(../../images/zeta/guitar-04.jpg)' }}
        >
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='row' style={{ marginTop: '5em' }}>
                  <div className='col-lg-6 col-md-12'>
                    <div className='app-banner-content'>
                      <h1>Jamcamp</h1>
                      <p>
                        Jam in a real band on the instrument of your choice.
                        Students will learn and perform up to 4 songs on guitar,
                        bass, drums, piano, and/or vocals. Students can choose
                        to play on as many instruments as they want or just
                        stick with one or two their favorites. Open to all skill
                        levels and ages 7 and above.
                      </p>

                      <h2>Session 1: 7/22 – 7/26 10am-2pm</h2>
                      <h2>Session 2: 8/5 – 8/9 10am-2pm</h2>

                      <p>
                        <strong>$349 per session</strong> - $50 early-bird
                        discount ($299) if paid 30 days before start date.
                        <br />
                        $25 materials fee
                        <br />
                        $35 lunch fee (optional - lunch provided for all 5 days
                        or student can bring their own or make other
                        arrangements)
                      </p>
                      {/* <div className='btn-box'>
                        <a href='tel:+9096757580' className='btn btn-primary'>
                          Call Now to Enroll
                        </a>
                      </div> */}
                    </div>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.4318769532492!2d-117.75808781038624!3d34.1096917454373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32f7d4b2bed15%3A0xe9feabccc14ce1f!2sRockstars%20Of%20Tomorrow!5e0!3m2!1sen!2sus!4v1715995966901!5m2!1sen!2sus'
                      style={{ border: 0 }}
                      allowfullscreen=''
                      loading='lazy'
                      referrerpolicy='no-referrer-when-downgrade'
                      width='100%'
                      height='450'
                    ></iframe>
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        marginTop: '4em',
                      }}
                    >
                      <div>
                        <h2 className='text-white'>Contact Us</h2>
                        <p>Questions? Let us know how we can help you.</p>
                        <span>
                          <a href='tel:9096757580' className='text-white'>
                            Call: (909) 675-7580
                          </a>
                          <a
                            href='mailto:laverne@rockstarsoftomorrow.com'
                            className='text-white'
                          >
                            Email: laverne@rockstarsoftomorrow.com
                          </a>
                          <div
                            style={{ display: 'flex' }}
                            className='text-white'
                          >
                            <a
                              href='https://www.instagram.com/rockstarslaverne'
                              target='_blank'
                              rel='noreferrer noopener'
                            >
                              <i
                                className='fab fa-instagram'
                                style={{ marginRight: '1.5em' }}
                              ></i>
                            </a>

                            <a
                              href='https://www.facebook.com/rockstarslaverne/'
                              target='_blank'
                              rel='noreferrer noopener'
                            >
                              <i className='fab fa-facebook-f'></i>
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className='col-lg-6 col-md-12'
                    style={{ margin: '8em 0' }}
                  >
                    {/* <div
                      className='app-banner-image'
                      style={{ textAlign: 'left' }}
                    > */}
                    <JamCampSignupForm />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
      <Footer />
    </>
  )
}
