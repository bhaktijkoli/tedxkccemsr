import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Speaker from './Speaker';

let data = require('./data.js')

class Speakers extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDxKCCEMSR - Speakers"
  }
  render() {
    let speakersList = data.map((el, key) => {
      return   <Speaker speaker={el} key={key} time={key}/>
    })
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
              <div className="center">
                {speakersList}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Speakers);
