import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area-two ptb-100">
                <div className="container">
                    <div className="freelancer-section-title">
                        <h2>About <span>Me</span></h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="freelancer-about-content">
                                <h3>Hello!</h3>
                                <span>I’m David Smith, a freelance Full Stack Web Developer.</span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
