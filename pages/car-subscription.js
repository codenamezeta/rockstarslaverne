import React, { Component } from 'react';
import NavbarSeven from '../components/Layouts/NavbarSeven';
import Footer from '../components/CarSubscription/Footer';
import Banner from '../components/CarSubscription/Banner';
import Services from '../components/CarSubscription/Services';
import HowWorks from '../components/CarSubscription/HowWorks';
import Features from '../components/CarSubscription/Features';
import FeaturedCars from '../components/CarSubscription/FeaturedCars';
import Feedback from '../components/CarSubscription/Feedback';
import Trial from '../components/CarSubscription/Trial';
import Partner from '../components/CarSubscription/Partner';
import Pricing from '../components/CarSubscription/Pricing';
import Faq from '../components/CarSubscription/Faq';
import Download from '../components/CarSubscription/Download';
import Contact from '../components/CarSubscription/Contact';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarSeven />
                <Banner />
                <Services />
                <HowWorks />
                <Features />
                <FeaturedCars />
                <Feedback />
                <Trial />
                <Partner />
                <Pricing />
                <Faq />
                <Download />
                <Contact />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
