import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import Footer from '../components/Layouts/Footer'
import Banner from '../components/app/Banner'
import Services from '../components/Saas/Services'
import Features from '../components/Saas/Features'
import Funfact from '../components/Saas/Funfact'
import NewFeatures from '../components/Saas/NewFeatures'
import Feedback from '../components/Saas/Feedback'
import Pricing from '../components/Saas/Pricing'
import Faq from '../components/Saas/Faq'
// import Trial from '../components/Saas/Trial'
// import Blog from '../components/Saas/Blog'
// import Partner from '../components/Saas/Partner'
import Subscribe from '../components/Saas/Subscribe'
import Contact from '../components/Saas/Contact'

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
