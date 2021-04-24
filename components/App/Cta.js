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
                            <h2>How App <span>Works</span></h2>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <Link href="#">
                                <a
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="fas fa-play"></i>
                                </a>
                            </Link>
                        </div>

                        <div className="cta-inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-download"></i>
                                        <h3>Download</h3>
                                        <p>Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-bars"></i>
                                        <h3>Setup It</h3>
                                        <p>Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="single-cta-box">
                                        <i className="far fa-thumbs-up"></i>
                                        <h3>Enjoy It</h3>
                                        <p>Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis.</p>
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
