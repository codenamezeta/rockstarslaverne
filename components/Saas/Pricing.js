import React, { Component } from 'react'
import Link from 'next/link'

class Pricing extends Component {
  render() {
    return (
      <section id='pricing' className='pricing-area ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Pricing</h2>
            <div className='bar'></div>
            <p>Learn to rock for as little as $99 a month.</p>
          </div>
          <div className='price-category'>
            <h3>Standard Lessons</h3>
            <div className='price-item'>
              <h4>Group Lessons</h4>
              <p>
                Learn your favorite instrument in a group setting with others.
                Great option for younger students and beginners.
              </p>
              <div className='price-line'>
                <span className='price-time'>45 minutes/week</span>
                <span className='price'>$99/month</span>
              </div>
              <hr />
            </div>

            <div className='price-item'>
              <h4>Private Group Lessons</h4>
              <p>
                Closed group lesson with your own family members and/or friends.
                (2 student minimum, same instrument.)
              </p>
              <div className='price-line'>
                <span className='price-time'>45 minutes/week</span>
                <span className='price'>$125/student/month*</span>
              </div>
              <hr />
            </div>

            <div className='price-item'>
              <h4>Private Lessons</h4>
              <p>Private, one-on-one instruction. Our most popular plan.</p>
              <div className='price-line'>
                <span className='price-time'>30 minutes/week</span>
                <span className='price'>$145/month*</span>
              </div>
              <hr />
              <div className='price-line'>
                <span className='price-time'>45 minutes/week</span>
                <span className='price'>$215/month*</span>
              </div>
              <hr />
              <div className='price-line'>
                <span className='price-time'>60 minutes/week</span>
                <span className='price'>$280/month*</span>
              </div>
              <hr />
            </div>
          </div>
          {/* Second colum for pricing */}
          <div className='price-category'>
            <h3>Performance Classes</h3>
            <div className='price-item'>
              <h4>JamCore</h4>
              <p>
                This beg. performance class is open to all ages and all skill
                levels. Includes one concert. First session FREE to all private
                lesson students. (2 mo. course.)
              </p>
              <div className='price-line'>
                <span className='price-time'>60 minutes/week</span>
                <span className='price'>$49/month**</span>
              </div>
              <hr />
            </div>

            <div className='price-item'>
              <h4>BandCore</h4>
              <p>
                Play in a real band, record a song, and rock up to two shows.
                int.-adv. skill levels, ages 10+. (3 mo. course.)
              </p>
              <div className='price-line'>
                <span className='price-time'>60 minutes/week</span>
                <span className='price'>$99/month/restrictions apply**</span>
              </div>
              <hr />
            </div>

            <div className='price-item'>
              <h4>Rockstar Pro</h4>
              <p>
                Fully customizable band creation and development program.
                Includes private band coach. Adv. skill levels.
              </p>
              <div className='price-line'>
                <span className='price-time'>60 minutes/week</span>
                <span className='price'>$125/student/month</span>
              </div>
              <hr />
            </div>
          </div>
          <p className='price-disclaimer'>
            *Prices based on monthly, auto-prepaid lesson plan.
            <br />
            **Prices based on active, private lesson enrollment.
          </p>
        </div>
      </section>
    )
  }
}

export default Pricing
