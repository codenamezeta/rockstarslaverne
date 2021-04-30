import React, { Component } from 'react'

class Subscribe extends Component {
  render() {
    return (
      <section className='subscribe-area ptb-100'>
        <div className='container'>
          <div className='subscribe-content'>
            <h2>Newsletter</h2>
            <p>
              Get occasional updates about upcoming performances and special
              announcements. We never spam!
            </p>

            <form
              className='newsletter-form'
              data-toggle='validator'
              action='https://formspree.io/f/mnqlnyvo'
              method='POST'
            >
              <div className='row align-items-center'>
                <div className='col-lg-8 col-md-8'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email address'
                    name='EMAIL'
                    required={true}
                    autoComplete='off'
                  />
                </div>

                <div className='col-lg-4 col-md-4'>
                  <button type='submit'>Subscribe</button>
                  <div id='validator-newsletter' className='form-result'></div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='rocket'>
          <img src={require('../images/zeta/flying-v-2.png')} alt='guitar' />
        </div>
        <div className='map'>
          <img src={require('../images/map.png')} alt='map' />
        </div>
      </section>
    )
  }
}

export default Subscribe
