import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class Cta extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };


    render() {
        return (
            <React.Fragment>
                <section className="cta-area ptb-100 jarallax pb-0" data-jarallax='{"speed": 0.2}'>
                    <div className="container">
                        <div className="cta-content">
                            <h2>We always try to quality work</h2>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <Link href="#">
                                <a
                                    className="popup-youtube video-btn"
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                >
                                    <i className="fas fa-play"></i>
                                </a>
                            </Link>
                        </div>

                        <div className="cta-inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-layer-group"></i>
                                        <h3>Modern Design</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-fighter-jet"></i>
                                        <h3>Fast Loading</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="single-cta-box">
                                        <i className="fas fa-broom"></i>
                                        <h3>Clean Code</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default Cta;
