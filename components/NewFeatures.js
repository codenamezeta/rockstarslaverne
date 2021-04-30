import React, { Component } from 'react'

class NewFeatures extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tabs_item')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('fadeInUp')
      tabcontent[i].style.display = 'none'
    }

    tablinks = document.getElementsByTagName('li')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '')
    }

    document.getElementById(tabNmae).style.display = 'flex'
    document.getElementById(tabNmae).className += ' fadeInUp animated'
    evt.currentTarget.className += 'current'
  }

  render() {
    return (
      <section className='new-features-update edge ptb-100' id='programs'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Redefining Music Education</h2>
            <div className='bar'></div>
            <p>
              Rockstars Of Tomorrow lesson plans are custom-tailored for every
              student’s unique goals. This means no matter what you want to
              learn, whether it’s rock, pop, punk, blues, acoustic, alternative,
              metal, reggae, folk, country or anything in between, you know you
              are going to learn the way the pros do – by studying those great
              artists who inspire you to succeed.
            </p>
          </div>

          <div className='tab new-features-update-tab'>
            <div className='row'>
              <div className='col-lg-3 col-md-4'>
                <ul className='tabs'>
                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab1')
                    }}
                    className='current'
                  >
                    <a href='#'>Guitar</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab2')
                    }}
                  >
                    <a href='#'>Bass Guitar</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab3')
                    }}
                  >
                    <a href='#'>Drums</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab4')
                    }}
                  >
                    <a href='#'>Piano/Keyboards</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab5')
                    }}
                  >
                    <a href='#'>Vocals</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab6')
                    }}
                  >
                    <a href='#'>Ukulele</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab7')
                    }}
                  >
                    <a href='#'>Audio Production</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab8')
                    }}
                  >
                    <a href='#'>Songwriting</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-9 col-md-8'>
                <div className='tab_content'>
                  <div id='tab1' className='tabs_item'>
                    <p className='instrument-info'>
                      Today’s most popular instrument – the guitar. Whether it's
                      acoustic or electric, rock or pop, rhythm or lead, we’ve
                      got you covered. Playing guitar is one of those skills
                      that comes in handy in so many situations later in life,
                      you’ll never regret it. The guitar is an incredibly
                      expressive instrument that can be played in a ton of
                      different styles. These days with the selection of guitar
                      types, amps, pedals, and effects, there are so many great
                      sounds a guitar can produce, which makes it the perfect
                      instrument for rock, blues, jazz, metal, reggae, punk,
                      alternative, country and many many more. Come to think of
                      it… if a genre of music debuted in the last 60 years,
                      chances are it was inspired by the electric guitar
                      revolution!
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/guitar-04.jpg')}
                      alt='new'
                    />
                  </div>

                  <div id='tab2' className='tabs_item'>
                    <p className='instrument-info'>
                      The bass guitar is a great instrument for beginners and
                      experts alike. It’s easy enough for anyone to master and
                      there’s really nothing else like it. It rumbles and it
                      roars! Versatile enough for most types of modern music and
                      a staple of blues, rock, metal, and jazz. Like our guitar
                      program, our bass instructors will teach you to master
                      bass techniques like walking, improvising, right hand
                      fingering, slapping, playing with a pick, communicating
                      with the drummer and most importantly of all – holding a
                      song together. In a world full of guitar players, the
                      demand for great bass players is strong. We take this
                      program serious so you will get noticed!
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/bass-02.jpg')}
                      alt='new'
                    />
                  </div>

                  <div id='tab3' className='tabs_item'>
                    <p className='instrument-info'>
                      The drums are probably the most fun you’ll ever have
                      sitting down. Primal and loud, the drums are a great way
                      to get exercise and release angst. You’ll also improve
                      your coordination and math skills. Playing the drums with
                      other musicians in a band is a kind of fun that can only
                      be understood through experience. Plain and simple, the
                      drums rock and so will you after taking this explosive
                      drum program! You’ll learn rudiments, theory, technique,
                      dynamics and timing all while rockin’ to the beats of your
                      favorite songs. Learn how to rock the kit like John
                      Bonham, Travis Barker, Neil Peart, Keith Moon and Dave
                      Grohl. Great for all types of rock music as well as metal,
                      reggae, pop, and punk. We’ll learn about other types of
                      percussion instruments that go beyond the traditional drum
                      sets as well.
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/drums-04.jpg')}
                      alt='new'
                    />
                  </div>

                  <div id='tab4' className='tabs_item'>
                    <p className='instrument-info'>
                      Great for solo artists and ensemble musicians alike, the
                      keyboard is the modern-day predecessor to the piano which
                      has been around for centuries. The catalog of great piano
                      music is absurdly huge and one that is constantly growing.
                      The enormous array of synthesizers and virtual instruments
                      a keyboard can replicate means there is literally no genre
                      of music that can’t be performed on this amazing
                      instrument. The keyboard’s logical layout makes it easy to
                      learn and it’s large range makes it like having an entire
                      orchestra at your fingertips, which is great for singers
                      or composers. In this program, students can learn music
                      theory, reading music, left and right hand techniques,
                      improvising, counterpoint, and performance skills.
                      Learning the piano is fun again!
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/keys-01.jpg')}
                      alt='new'
                    />
                  </div>

                  <div id='tab5' className='tabs_item'>
                    <p className='instrument-info'>
                      Singing is by far the oldest form of musical expression
                      and quite arguably the most challenging and most beautiful
                      instrument of them all. Just about every genre of music
                      includes vocals of some sort. No matter how good a singer
                      gets, there are always new challenges to master but
                      believe it or not, anyone can sing! It’s like learning to
                      ride a bike… a bit scary at first, but once the
                      fundamentals are in place, the sky’s the limit. If you’ve
                      never sang before, no problem… we start with the basics
                      and build up from there. For experienced singers looking
                      to strengthen your gift and increase your range, we will
                      help hone your skills to take it to the next level.
                      Singing is extremely rewarding and is one of the best ways
                      to express yourself through music. Our vocal program will
                      give you a voice to be heard.
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/vox-05.jpg')}
                      alt='new'
                    />
                  </div>

                  <div id='tab6' className='tabs_item'>
                    <p className='instrument-info'>
                      All great songs have great engineers & producers behind
                      them. With our Recording & Production classes, this is
                      your chance to get on the other side of the glass and help
                      guide recorded music into that perfect hit song! You’ll
                      learn all about music production including recording in
                      Logic and Pro Tools, mixing, proper EQ and compression
                      settings, mic’ing instruments, how to use popular
                      plug-ins, recording great vocals, editing and so much
                      more. These are the same skills that the pros use everyday
                      on all your favorite songs. Don’t wait, this class could
                      lead you into your first real job in the music business!
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/ukulele-02.jpg')}
                      alt='new'
                    />
                  </div>

                  <div id='tab7' className='tabs_item'>
                    <p className='instrument-info'>
                      All great songs have great engineers & producers behind
                      them. With our Recording & Production classes, this is
                      your chance to get on the other side of the glass and help
                      guide recorded music into that perfect hit song! You’ll
                      learn all about music production including recording in
                      Logic and Pro Tools, mixing, proper EQ and compression
                      settings, mic’ing instruments, how to use popular
                      plug-ins, recording great vocals, editing and so much
                      more. These are the same skills that the pros use everyday
                      on all your favorite songs. Don’t wait, this class could
                      lead you into your first real job in the music business!
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/audio-01.jpg')}
                      alt='new'
                    />
                  </div>
                  <div id='tab8' className='tabs_item'>
                    <p className='instrument-info'>
                      Songwriting is the best way to make money and stay in
                      demand in the music industry, it’s also incredibly fun and
                      one of the healthiest ways to express yourself. Hone your
                      craft and reach your goals – creative, commercial or both.
                    </p>
                    <img
                      className='instrument-photo'
                      src={require('../images/zeta/songwriting-02.jpg')}
                      alt='new'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default NewFeatures
