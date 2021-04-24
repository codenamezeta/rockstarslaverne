import React, { Component } from 'react'
import NavbarFive from '../components/Layouts/NavbarFive'
import Footer from '../components/Layouts/Footer'
import Banner from '../components/App/Banner'
import Partner from '../components/App/Partner'
import About from '../components/App/About'
import Cta from '../components/App/Cta'
import Features from '../components/App/Features'
import Services from '../components/Saas/Services'
import Feedback from '../components/App/Feedback'
import Download from '../components/App/Download'
import Faq from '../components/App/Faq'
import Blog from '../components/App/Blog'
import Subscribe from '../components/App/Subscribe'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarFive />
        <Banner />
        <Partner />
        <About />
        {/* <Services /> */}
        <Cta />
        {/* Band Classes */}
        <Features />
        <Feedback />
        <Download />
        <Faq />
        <Blog />
        <Subscribe />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index
