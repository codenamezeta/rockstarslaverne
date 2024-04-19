import React from 'react'
import NavbarThree from '../components/NavbarThree'
import Footer from '../components/Footer'
import Image from 'next/image'
// import src from '/images/404.png'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <React.Fragment>
        <NavbarThree />

        <section
          className='page-title-area jarallax'
          data-jarallax='{"speed": 0.2}'
        >
          <div className='container'>
            <h2>{this.props.statusCode} Error</h2>
          </div>
        </section>

        <section className='error-area ptb-100'>
          <div className='container'>
            <div className='error-content'>
              <Image
                src='/images/404.png'
                alt='Error 404'
                width={500}
                height={300}
              />

              <form className='search-form'>
                <input
                  type='text'
                  className='search-field'
                  placeholder='search'
                />

                <button type='submit' className='search-submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </React.Fragment>
    )
  }
}

export default Error
