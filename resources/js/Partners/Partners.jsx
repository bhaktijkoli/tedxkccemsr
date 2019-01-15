import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Partners extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDxKCCEMSR - Partners"
  }
  render() {
    return (
      <div className="page">
        <section id="partners">
          <div className="nav-space"></div>
          <div className="container">
            <h2 className="section-title">Partners</h2>
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

export default withRouter(Partners);
