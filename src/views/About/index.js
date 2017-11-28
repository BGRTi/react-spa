import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="clocks">
                <h1>Clocks</h1>
                <div className="clocks_table">
                    <div className="clocks_hours"></div>
                    <div className="clocks_minutes"></div>
                    <div className="clocks_seconds"></div>
                </div>
            </section>
        );
    }
}

export default About;
