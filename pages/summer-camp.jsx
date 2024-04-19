import React from 'react'
import JamCampNavbar from '../components/JamCampNavbar'
import JamCampSignupForm from '../components/JamcampSignupForm'

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
                  </div>

                  <div className='col-lg-6 col-md-12'>
                    <div
                      className='app-banner-image'
                      style={{ textAlign: 'left' }}
                    >
                      <JamCampSignupForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
