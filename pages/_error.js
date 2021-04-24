import React from 'react'
import NavbarSix from '../components/Layouts/NavbarSix';
import Footer from '../components/Layouts/Footer';

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }
  
    render() {
        return (
            <React.Fragment>
                <NavbarSix />

                <section className="page-title-area jarallax" data-jarallax='{"speed": 0.2}'>
                    <div className="container">
                        <h2>{this.props.statusCode} Error</h2>
                    </div>
                </section>

                <section className="error-area ptb-100">
                    <div className="container">
                        <div className="error-content">
                            <img src={require("../images/404.png")} alt="error" />

                            <form className="search-form">
                                <input type="text" className="search-field" placeholder="search" />

                                <button type="submit" className="search-submit">Search</button>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
  
export default Error;