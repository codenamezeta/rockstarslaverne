import React, { Component } from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'
import '../node_modules/react-modal-video/scss/modal-video.scss'
import Widget from './Widget'

class Banner extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  //   componentDidMount() {
  //     const s = document.createElement('script')
  //     s.type = 'text/javascript'
  //     s.async = true
  //     s.innerHTML = "document.write('This is output by document.write()!')"
  //     this.instance.appendChild(s)
  //   }

  render() {
    return (
      <React.Fragment>
        <div
          id='home'
          className='app-banner jarallax'
          data-jarallax='{"speed": 0.2}'
        >
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-6 col-md-12'>
                    <div className='app-banner-content'>
                      <h1>Unleash Your Inner Rockstar!</h1>
                      <p>
                        From playing your first chord to recording your debut
                        album, Rockstars of Tomorrow - La Verne is the
                        neighborhood music studio that brings out the rockstar
                        in everyone.
                      </p>
                      <div className='btn-box'>
                        <a href='tel:+9096757580' className='btn btn-primary'>
                          Give Us A Call
                        </a>
                        <Link href='#'>
                          <a
                            onClick={(e) => {
                              e.preventDefault()
                              this.openModal()
                            }}
                            className='video-btn popup-youtube'
                          >
                            <i className='fa fa-play'></i> Watch the video!
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-12'>
                    <div className='app-banner-image'>
                      <Widget />
                      {/* <script
                        type='text/javascript'
                        src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_xPSJS'
                        className='sb_registration'
                      ></script> */}

                      {/* <img
                        src={require('../../images/phones_flat.png')}
                        alt='phone'
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId='kbNsdKM6lfY'
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    )
  }
}

export default Banner
