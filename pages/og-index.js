import React, { Component } from 'react'
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import Banner from '../components/Agency/Banner'
import Partner from '../components/Agency/Partner'
import About from '../components/Agency/About'
import Features from '../components/Agency/Features'
import Research from '../components/Agency/Research'
import Cta from '../components/Agency/Cta'
import Funfact from '../components/Agency/Funfact'
import Testimonials from '../components/Agency/Testimonials'
import Pricing from '../components/Agency/Pricing'
import Blog from '../components/Agency/Blog'
import Contact from '../components/Agency/Contact'
import Subscribe from '../components/Agency/Subscribe'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Partner />
        <About />
        <Features />
        <Research />
        <Cta />
        <Funfact />
        <Testimonials />
        <Blog />
        <Pricing />
        <Contact />
        <Subscribe />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index
