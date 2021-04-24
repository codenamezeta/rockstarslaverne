import React, { Component } from 'react';
import Link from 'next/link';

class Trial extends Component {
    render() {
        return (
            <section className="free-trial-area ptb-100 pt-0">
                <div className="container">
                    <div className="free-trial-content">
                        <img src={require("../../images/man-and-women.png")} alt="owman" />
                        <h3>Start your 30 days free <br />trials today!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link href="#">
                            <a className="btn btn-primary">try it free</a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trial;
