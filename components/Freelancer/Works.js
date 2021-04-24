import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Link from 'next/link'
const isServer = typeof window === 'undefined'
const mixitup = !isServer ? require('mixitup') : null

const images = [
  require('../../images/work-img1.jpg'),
  require('../../images/work-img2.jpg'),
  require('../../images/work-img3.jpg'),
  require('../../images/work-img4.jpg'),
  require('../../images/work-img5.jpg'),
  require('../../images/work-img6.jpg'),
]

class Works extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  }

  componentDidMount() {
    mixitup('#mix-wrapper', {
      animation: {
        effects: 'fade rotateZ(0deg)',
        duration: 700,
      },
      classNames: {
        block: 'programs',
        elementFilter: 'filter-btn',
      },
      selectors: {
        target: '.mix-target',
      },
    })
  }

  render() {
    const { photoIndex, isOpen } = this.state
    return (
      <section id='portfolio' className='portfolio-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='freelancer-section-title'>
            <h2>
              My Latest <span>Work</span>
            </h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='shorting-menu'>
                <button className='filter' data-filter='all'>
                  All
                </button>
                <button className='filter' data-filter='.design'>
                  Design
                </button>
                <button className='filter' data-filter='.seo'>
                  SEO
                </button>
                <button className='filter' data-filter='.branding'>
                  Branding
                </button>
                <button className='filter' data-filter='.print'>
                  Print
                </button>
                <button className='filter' data-filter='.video'>
                  Video
                </button>
              </div>
            </div>
          </div>

          <div className='shorting'>
            <div className='row' id='mix-wrapper'>
              <div className='col-lg-4 col-md-6 mix design mix-target'>
                <div className='single-work'>
                  <Link href='#'>
                    <a
                      className='popup-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.setState({ photoIndex: 0, isOpen: true })
                      }}
                    ></a>
                  </Link>

                  <div className='work-image'>
                    <img src={images[0]} alt='work-image' />

                    <div className='work-overlay'>
                      <h3>Digital Marketing</h3>
                      <span>UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mix print seo mix-target'>
                <div className='single-work'>
                  <Link href='#'>
                    <a
                      className='popup-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.setState({ photoIndex: 1, isOpen: true })
                      }}
                    ></a>
                  </Link>

                  <div className='work-image'>
                    <img src={images[1]} alt='work-image' />

                    <div className='work-overlay'>
                      <h3>Digital Marketing</h3>
                      <span>UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mix video branding mix-target'>
                <div className='single-work'>
                  <Link href='#'>
                    <a
                      className='popup-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.setState({ photoIndex: 2, isOpen: true })
                      }}
                    ></a>
                  </Link>

                  <div className='work-image'>
                    <img src={images[2]} alt='work-image' />

                    <div className='work-overlay'>
                      <h3>Digital Marketing</h3>
                      <span>UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mix design print mix-target'>
                <div className='single-work'>
                  <Link href='#'>
                    <a
                      className='popup-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.setState({ photoIndex: 3, isOpen: true })
                      }}
                    ></a>
                  </Link>

                  <div className='work-image'>
                    <img src={images[3]} alt='work-image' />

                    <div className='work-overlay'>
                      <h3>Digital Marketing</h3>
                      <span>UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mix branding video mix-target'>
                <div className='single-work'>
                  <Link href='#'>
                    <a
                      className='popup-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.setState({ photoIndex: 4, isOpen: true })
                      }}
                    ></a>
                  </Link>

                  <div className='work-image'>
                    <img src={images[4]} alt='work-image' />

                    <div className='work-overlay'>
                      <h3>Digital Marketing</h3>
                      <span>UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mix seo design mix-target'>
                <div className='single-work'>
                  <Link href='#'>
                    <a
                      className='popup-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.setState({ photoIndex: 5, isOpen: true })
                      }}
                    ></a>
                  </Link>

                  <div className='work-image'>
                    <img src={images[5]} alt='work-image' />

                    <div className='work-overlay'>
                      <h3>Digital Marketing</h3>
                      <span>UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + '/' + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </section>
    )
  }
}

export default Works
