import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section id='contact' className='contact-area ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Contact Us</h2>
            <div className='bar'></div>
            <p>Get in touch with Rockstars Of Tomorrow - La Verne.</p>
          </div>

          <div className='contact-form'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-12'>
                <div className='contact-info-box'>
                  <p>
                    Our front desk staff is here to help you and make sure your
                    schedule is up to date.
                  </p>

                  <span>
                    Would love to hear from you. Call us directly at:
                    <a href='tel:9096757580'>(909) 675-7580</a>
                    <div style={{display: 'flex'}}>
                    <a
                      href='https://www.instagram.com/rockstarslaverne'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <i className='fab fa-instagram' style={{marginRight: '1.5em'}}></i>
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

              <div className='col-lg-6 col-md-12'>
                <form
                  id='contactForm'
                  action='https://formspree.io/f/xrgrqayg'
                  method='POST'
                >
                  <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <label>Name</label>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          required={true}
                          data-error='Please enter your name'
                        />
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <label>Email</label>
                        <input
                          type='email'
                          name='email'
                          className='form-control'
                          required={true}
                          data-error='Please enter your email'
                        />
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <label>Message</label>
                        <textarea
                          className='form-control'
                          name='message'
                          cols='30'
                          rows='4'
                          required={true}
                          data-error='Write your message'
                        />
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <button
                        type='submit'
                        className='btn btn-primary hover-tan'
                      >
                        Send Message
                      </button>
                      <div
                        id='msgSubmit'
                        className='h3 text-center hidden'
                      ></div>
                      <div className='clearfix'></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Contact