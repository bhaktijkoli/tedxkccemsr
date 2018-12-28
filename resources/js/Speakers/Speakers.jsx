import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Speakers extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDx KCCEMSR - Speakers"
  }
  render() {
    return (
      <div className="page">
        <section id="speakers">
          <div className="nav-space"></div>
          <div className="backdrop">
            <img src="/img/microphone.png" className="scale"/>
          </div>
          <div className="container">
            <h2 className="section-title">Speakers</h2>
            <div className="section-body">
              <div className="center" style={{marginTop:100}}>
                <span className="typewriter">To be announced...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Speakers);
