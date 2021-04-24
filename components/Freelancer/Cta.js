import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content-two">
                        <h2>I am Available for Freelance Hire</h2>
                        <Link href="#">
                            <a className="btn btn-primary">Hire Me!</a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
