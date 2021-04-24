import React, { Component } from 'react';

class ComingSoon extends Component {
    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    commingSoonTime = () => {
        let endTime = new Date("January 01, 2020 17:00:00 PDT");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.commingSoonTime();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <section className="coming-soon">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="coming-soon-content">
                                <h1>We are launching our new website</h1>
                                <p>Working hard for something we don't care about is called stress. Working hard for smething we love is called passion.</p>

                                <div id="timer">
                                    <div id="days">{this.state.days} <span>Days</span></div>
                                    <div id="hours">{this.state.hours} <span>Hours</span></div>
                                    <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                                    <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                                </div>
                                
                                <form onSubmit={this.onSubmit} className="newsletter-form" data-toggle="validator">
                                    <input type="email" className="form-control" placeholder="Email address" name="EMAIL" required={true} autoComplete="off" />
                                    <button type="submit">Subscribe</button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ComingSoon;
