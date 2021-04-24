import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class Banner extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <React.Fragment>
                <div id="home" className="saas-banner">
                    <div className="effect"></div>

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="saas-banner-content">
                                    <h1>Ultimate Platform to monitor your best workflow.</h1>
                                    <p>It should be noted that although application software is thought of as a program, it can be anything that runs on a computer.</p>
                                    <div className="btn-box">
                                        <Link href="#">
                                            <a className="btn btn-primary">Get Started</a>
                                        </Link>
                                        <Link href="#">
                                            <a
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="fab fa-google-play"></i> Watch our video
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="particles-js"></div>

                    <div className="saas-banner-image"><img src={require("../../images/laptop.png")} alt="b" /></div>
                </div>
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

export default Banner;
