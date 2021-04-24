import React, { Component } from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import Banner from '../components/Freelancer/Banner'
import Features from '../components/Freelancer/Features'
import About from '../components/Freelancer/About'
import Services from '../components/Freelancer/Services'
import Skill from '../components/Freelancer/Skill'
import Works from '../components/Freelancer/Works'
import Funfact from '../components/Freelancer/Funfact'
import Testimonials from '../components/Freelancer/Testimonials'
import Interests from '../components/Freelancer/Interests'
import Cta from '../components/Freelancer/Cta'
import Blog from '../components/Freelancer/Blog'
import Contact from '../components/Freelancer/Contact'
import Footer from '../components/Freelancer/Footer'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <Banner />
        <Features />
        <About />
        <Services />
        <Skill />
        <Works />
        <Funfact />
        <Testimonials />
        <Interests />
        <Cta />
        <Blog />
        <Contact />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index
