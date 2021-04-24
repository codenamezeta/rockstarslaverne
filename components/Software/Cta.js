import React, { Component } from 'react';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area-three ptb-100 bg-fffcf4">
                <div className="container">
                    <div className="cta-content-three">
                        <img src={require("../../images/star.png")} alt="cta" />
                        <h3>General Data Protection Regulation (GDPR)</h3>
                        <p>The reforms are designed to reflect the world we're living in now, and brings laws and obligations - including those around personal data, privacy and consent - across Europe up to speed for the internet-connected age.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
