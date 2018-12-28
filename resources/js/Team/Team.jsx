import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Team extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDx KCCEMSR - Team"
  }
  render() {
    return (
      <div className="page">
        <section id="team">
          <div className="nav-space"></div>
          <div className="container">
            <h2 className="section-title">Team</h2>
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

export default withRouter(Team);
