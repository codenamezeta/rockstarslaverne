import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    return (
      <footer className='footer-area bg-fffcf4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-footer-widget'>
                <div className='logo'>
                  <Link href='/'>
                    <a>
                      <img
                        src={require('../images/zeta/logo.png')}
                        style={{ height: '60px' }}
                        alt='logo'
                      />
                    </a>
                  </Link>
                </div>

                <ul className='contact-info'>
                  <li>
                    2855 Foothill Blvd. A-102
                    <br />
                    La Verne CA 91750
                  </li>
                  <li>
                    <a href='tel:9096757580'>(909) 675-7580</a>
                  </li>
                  <li>
                    <a href='mailto:laverne@rockstarsoftomorrow.com'>
                      laverne@rockstarsoftomorrow.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6'>
              <div className='single-footer-widget pl-3'>
                <h3>Links</h3>

                <ul className='list'>
                  <li>
                    <a
                      href='https://rockstarsoftomorrow.com'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      RoT Main Site
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://rockstarsoftomorrow.com/locations'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Locations
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://rockstarsoftomorrow.com/locations/la-verne-ca'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://rockstars-of-tomorrow.myshopify.com/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Store
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://rockstarsoftomorrow.com/franchise'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Franchising
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>Support</h3>

                <ul className='list'>
                  <li>
                    <a
                      href='https://app.mymusicstaff.com'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Client/Student Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://app.mymusicstaff.com/Student/v2/en/online-resources'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Online Resources
                    </a>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>

                  <li>
                    <Link href='#'>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#home'>
                      <a>Enrollment</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Special Thanks</h3>

                <ul className='list'>
                  <li>
                    <a
                      href='https://usa.yamaha.com/products/musical_instruments/index.html'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Yamaha
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://on-stage.com/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      On Stage
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://sabian.com/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Sabian
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.aquariandrumheads.com/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Aquarian
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.skbcases.com/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      SKB Cases
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright-area'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-7 col-md-7'>
                <p className='small-text'>
                  Copyright <i className='far fa-copyright'></i>{' '}
                  {new Date().getFullYear() + ' '}
                  <a href='/'> Rockstars Of Tomorrow – La Verne.</a>
                  <br />
                  Design by{' '}
                  <a
                    href='https://a2zeta.com'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    _codenamezeta
                  </a>
                </p>
              </div>

              <div className='col-lg-5 col-md-5'>
                <ul>
                  <li>
                    <a
                      href='https://www.instagram.com/rockstarslaverne'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/rockstarslaverne/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  {/* <li>
                    <Link href='#'>
                      <a>
                        <i className='fab fa-youtube'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='map2'>
          <img src={require('../../images/zeta/guitar-girl.jpg')} alt='map' />
        </div> */}
      </footer>
    )
  }
}

export default Footer
