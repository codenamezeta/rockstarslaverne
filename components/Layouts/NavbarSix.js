import React, { Component } from 'react';
import Link from 'next/link';
import SeoSection from './SeoSection';

class NavbarSix extends Component {
    render() {
        return (
            <React.Fragment>
            <SeoSection 
                title="Genial - Lead Generation Landing Page"
                desc="Genial is a React Next Landing Templates. This has been built with React, Next.js, Express.js, and ES6+."
                url="https://genial-react.envytheme.com/lead-generation"
            />
            <nav id="navbar" className="navbar navbar-expand-lg navbar-style-three navbar-light bg-light">
                <div className="container">
                    <Link href="/lead-generation">
                        <a className="navbar-brand">
                            <img src={require('../../images/white-logo.png')} alt="logo" />
                        </a>
                    </Link>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default NavbarSix;