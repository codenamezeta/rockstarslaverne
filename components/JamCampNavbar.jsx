import React, { Component } from 'react'
import Link from 'next/link'
import SeoSection from './SeoSection'
import logo from '../images/zeta/logo.svg'
import Image from 'next/image'

class NavbarThree extends Component {
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  componentDidMount() {
    this._isMounted = true
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 240) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
    window.scrollTo(0, 0)

    // this.menuActiveClass()
  }

  // menuActiveClass = () => {
  //   let mainNavLinks = document.querySelectorAll('nav ul li a')
  //   window.addEventListener('scroll', () => {
  //     let fromTop = window.scrollY
  //     mainNavLinks.forEach((link) => {
  //       if (link.hash) {
  //         let section = document.querySelector(link.hash)

  //         if (
  //           section.offsetTop <= fromTop &&
  //           section.offsetTop + section.offsetHeight > fromTop
  //         ) {
  //           link.classList.add('active')
  //         } else {
  //           link.classList.remove('active')
  //         }
  //       }
  //     })
  //   })
  // }

  render() {
    const { collapsed } = this.state
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'navbar-collapse collapse show'
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right'
    return (
      <React.Fragment>
        <SeoSection
          title='Summer Camp at Rockstars of Tomorrow – La Verne'
          desc='From playing your first chord to recording your debut album, Rockstars of Tomorrow - La Verne is the neighborhood music studio that brings out the rockstar in everyone.'
          url='https://rockstarslaverne.com/summer-camp'
        />

        <nav
          id='navbar'
          className='navbar navbar-expand-lg navbar-style-one navbar-dark'
        >
          <div className='container'>
            <Link legacyBehavior href='/'>
              <a className='navbar-brand'>
                <Image
                  src={logo}
                  height={100}
                  width={120}
                  style={{ height: '80px' }}
                  alt='logo'
                />
              </a>
            </Link>

            <button
              onClick={this.toggleNavbar}
              className={classTwo}
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className={classOne} id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a
                    onClick={this.toggleNavbar}
                    offset={() => 100}
                    className='nav-link'
                    href='/'
                  >
                    About Rockstars La Verne
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    onClick={this.toggleNavbar}
                    offset={() => 100}
                    className='nav-link active'
                    href='/summer-camp'
                  >
                    Summer JamCamp
                  </a>
                </li>
              </ul>

              {/* <ul className='others-option'>
                <li>
                  <a href='/signin' className='btn btn-primary'>
                    sign in
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavbarThree
