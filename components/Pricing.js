import React, { Component } from 'react'

class Pricing extends Component {
  render() {
    return (
      <section id='pricing' className='pricing-area ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Pricing</h2>
            <div className='bar'></div>
            {/* <p>
              $100 off ANY first band class for ALL students enrolled in weekly
              private lessons.
            </p> */}
          </div>

          <div className='price-category'>
            <h3>Standard Lessons</h3>

            <div className='price-item'>
              <h4>Private Lessons</h4>
              <p>
                Our most popular plan. Private, one-on-one instruction or
                private groups with your own family members and/or friends.
              </p>
              <div className='price-row price-row-tall'>
                <span className='price-number'>20</span>
                <span className='price-time'>minutes/week</span>
                <span className='price'>$127/month</span>
                <span className='additional'>(+$57/add'l student)</span>
                <hr />
              </div>
              <div className='price-row price-row-tall'>
                <span className='price-number'>30</span>
                <span className='price-time'>minutes/week</span>
                <span className='price'>$159/month</span>
                <span className='additional'>(+$69/add'l student)</span>
                <hr />
              </div>

              <div className='price-row price-row-tall'>
                <span className='price-number'>45</span>
                <span className='price-time'>minutes/week</span>
                <span className='price'>$237/month</span>
                <span className='additional'>(+$87/add'l student)</span>
                <hr />
              </div>
              <div className='price-row price-row-tall'>
                <span className='price-number'>60</span>
                <span className='price-time'>minutes/week</span>
                <span className='price'>$309/month</span>
                <span className='additional'>(+$109/add'l student)</span>
                <hr />
              </div>
            </div>

            <div className='price-item'>
              <h4>Group Lessons</h4>
              <p>
                Learn your favorite instrument in a group setting with others.
                Great option for younger students and beginners.
              </p>
              <div className='price-row'>
                <span className='price-number'>20-60</span>
                <span className='price-time'>minutes/week**</span>
                <span className='price'>$99/month</span>
                <hr />
              </div>
            </div>

            {/* <div className='price-item'>
              <h4>Private Group Lessons</h4>
              <p>
                Closed group lesson with your own family members and/or friends.
                (2 student minimum, same instrument.)
              </p>
              <div className='price-line'>
                <span className='price-time'>45 minutes/week</span>
                <span className='price'>$125/student/month</span>
              </div>
              <hr />
            </div> */}

            <div className='price-item'>
              <h4>Rock Shop</h4>
              <p>
                Beginner-level students meet once a month and play up to four
                pre-chosen songs as a band. RockShop teaches young musicians the
                fundamentals of playing songs from beginning to end with other
                players and gets students ready to move up to the
                intermediate-level band class (JamCore).
              </p>
              <div className='price-row'>
                <span className='price-number'>30-120</span>
                <span className='price-time'>minutes/class**</span>
                <span className='price'>$49/month</span>
                <hr />
              </div>
              {/* <div className='price-row'>
                <span className='price-time'>30–120 minutes/class</span>
                <span className='price'>$39/month</span>
                <hr />
              </div> */}
            </div>
          </div>
          {/* Second column for pricing */}
          <div className='price-category'>
            <h3>Performance Classes</h3>

            <div className='price-item'>
              <h4>JamCore</h4>
              <p>
                Intermediate-level students choose their favorite songs from an
                extensive library of hits. For eight weeks, they meet once a
                week and jam in preparation for a live performance at a local
                venue. Students continue the class every eight weeks with new
                songs and performances until they're ready to move up to the
                advanced level band class (BandCore).
              </p>
              <div className='price-row price-row-tall'>
                <span className='price-number'>30-120</span>
                <span className='price-time'>minutes/week**</span>
                <span className='price'>$79/month</span>
                <span className='additional'>Restrictions apply***</span>
                <hr />
              </div>
            </div>

            <div className='price-item'>
              <h4>BandCore</h4>
              <p>
                Advanced-level students form real bands of any genre or style
                they'd like. BandCore bands then practice together every week
                for 12 weeks to prepare for our most select shows at top-choice
                venues. Students continue the class every 12 weeks with new
                bands, different songs, and fresh performances.
              </p>
              <div className='price-line'>
                <div className='price-row price-row-tall'>
                  <span className='price-number'>30-120</span>
                  <span className='price-time'>minutes/week**</span>
                  <span className='price'>$99/month</span>
                  <span className='additional'>Restrictions apply***</span>
                  <hr />
                </div>
                {/* <span className='price-time'>60 minutes/week</span>
                <span className='price'>$99/month – restrictions apply**</span> */}
              </div>
              {/* <hr /> */}
            </div>

            <div className='price-item'>
              <h4>Rockstar Pro</h4>
              <p>
                Gain real-world experience and substantial discounts in this
                ongoing, fully customizable program. Students of any skill level
                form their dream ensemble and obtain personalized coaching to
                help them develop as artists. Learn and participate in
                songwriting*, recording*, photo shoots*, video shoots*,
                promotion*, and anything else you may ever want. RockstarPro
                bands get extra rehearsal time for free, along with
                opportunities to work their way up to our most anticipated shows
                at the most incredible venues in Southern California.
              </p>
              <div className='price-row'>
                <span className='price-time'>Fully customizable</span>
                <span className='price'>Prices & times vary</span>
                <hr />
              </div>
            </div>
          </div>
          <p className='price-disclaimer'>
            *Discounted services. Not included in the monthly price.
            <br />
            **Time based on number of students enrolled.
            <br />
            ***$25 additional without active lesson enrollment.
          </p>
        </div>
      </section>
    )
  }
}

export default Pricing
