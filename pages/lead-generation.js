import React, { Component } from 'react';
import NavbarSix from '../components/Layouts/NavbarSix';
import Footer from '../components/LeadGeneration/Footer';
import Banner from '../components/LeadGeneration/Banner';
import Partner from '../components/LeadGeneration/Partner';
import Services from '../components/LeadGeneration/Services';
import Features from '../components/LeadGeneration/Features';
import Feedback from '../components/LeadGeneration/Feedback';
import Faq from '../components/LeadGeneration/Faq';
import Cta from '../components/LeadGeneration/Cta';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarSix />
                <Banner />
                <Partner />
                <Services />
                <Features />
                <Feedback />
                <Faq />
                <Cta />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
