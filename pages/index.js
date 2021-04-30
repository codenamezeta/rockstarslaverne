import React, { Component } from 'react'
import NavbarThree from '../components/NavbarThree'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Features from '../components/Features'
import Funfact from '../components/Funfact'
import NewFeatures from '../components/NewFeatures'
import Feedback from '../components/Feedback'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
// import Trial from '../components/Trial'
// import Blog from '../components/Blog'
// import Partner from '../components/Partner'
import Subscribe from '../components/Subscribe'
import Contact from '../components/Contact'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <Banner />
        <Services />
        <NewFeatures />
        <Features />
        <Funfact />
        <Feedback />
        <Subscribe />
        <Pricing />
        <Faq />
        {/* <Partner /> */}
        {/* <Trial /> */}
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index
