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
      <section id='programs' className='services-area ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>More Than Just Music Lessons</h2>
            <div className='bar'></div>
            <p>
              We provide uniquely creative spaces, innovative classes, driven
              instructors, and authentic real world performances for students of
              all ages and skill levels.
            </p>
          </div>
        </div>

        <div className='services-inner-area'>
          <div className='container-fluid'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-12'>
                <div className='services-image'>
                  <img
                    src={require('../images/zeta/guitar-kid-3-2.jpg')}
                    alt='A real Rockstar'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='services-inner-content'>
                  <div className='services-item'>
                    <div className='icon'>
                      <i className='fas fa-star'></i>
                    </div>
                    <h3>Redefining Music Education</h3>
                    <p>
                      What's better than buckling down and learning a group of
                      songs and being able to play them from start to finish
                      confidently? How about performing those songs on an actual
                      stage at an authentic live music venue to the delight of
                      cheering live audiences. Rockstars Of Tomorrow creates
                      deep and meaningful networks between students, teachers,
                      communities, fans, and venues. We don't do recitals here.
                      We get you out playing live, which is the whole point.
                    </p>
                  </div>

                  <div className='services-item'>
                    <div className='icon'>
                      <i className='fas fa-star'></i>
                    </div>
                    <h3>Not Your Father's Music School</h3>
                    <p>
                      Learning is most effective when done in a creative
                      environment. Here you won't find white walls, fluorescent
                      lights, or music note clip-art decorations because those
                      things don't inspire people. We create unique spaces that
                      stimulate the brain and the senses, spaces that are fun
                      and interesting, spaces that inspire.
                    </p>
                  </div>

                  <div className='services-item'>
                    <div className='icon'>
                      <i className='fas fa-star'></i>
                    </div>
                    <h3>
                      A positive, encouraging, &amp; collaborative approach.
                    </h3>
                    <p>
                      Our instructors are not ordinary, and we like it that way.
                      They play in bands and gig on the weekends. Together, they
                      come from all types of backgrounds and have been a part of
                      every musical act you can imagine, from Disney performers
                      to studio musicians to true-to-life rock stars. More than
                      anything, they're a super-talented group of professionals
                      passionate about teaching and shaping tomorrow's
                      rockstars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='services-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon'>
                      <i className='fas fa-solar-panel'></i>
                    </div>
                    <h3>JamCore</h3>
                    <p>
                      The stage is an extention of the classroom and it's where
                      all those powerful ideas you learned in your lessons get
                      applied, tested, and proven. This jam-session style class
                      is open to all ages and skill levels and each session
                      concludes with a live concert.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon bg-cdf1d8'>
                      <i className='fas fa-mobile-alt'></i>
                    </div>
                    <h3>BandCore</h3>
                    <p>
                      Amp up your learning skills in this super fun, fast-paced
                      class. Instructor approved students will learn all the
                      in-and-outs of playing in a real band. They will choose
                      their own setlists, rehearse, record, and then perform in
                      front of a live audience at two concerts.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon bg-f78acb'>
                      <i className='fas fa-th'></i>
                    </div>
                    <h3>Rockstar Pro</h3>
                    <p>
                      Are you ready to become a part of a professional, working
                      band? This custom open-ended program allows students to
                      choose their band mates, coach and set lists. Band members
                      develop performance skills, write original songs, and
                      headline at exclusive concerts!
                    </p>
                  </div>
                </div>

                {/* <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon'>
                      <i className='fas fa-code'></i>
                    </div>
                    <h3>Private Lessons</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon bg-c679e3'>
                      <i className='fab fa-creative-commons-zero'></i>
                    </div>
                    <h3>Group Lessons</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon bg-c679e3'>
                      <i className='fab fa-creative-commons-zero'></i>
                    </div>
                    <h3>Private Group Lessons</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-services'>
                    <div className='icon bg-eb6b3d'>
                      <i className='fas fa-key'></i>
                    </div>
                    <h3>Open Mic</h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div> */}
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
