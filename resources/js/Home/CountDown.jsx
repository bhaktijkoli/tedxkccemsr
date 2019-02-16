import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

require('./../scripts/flipdown');

class CountDown extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="container">
        <div className="center">
          <h1><span>Redefining</span> Perspective</h1>
          <span>A platform to bring leading thinkers and unheard voices, to share ideas worth spreading to local communities.</span>
        </div>
      </div>
    );
  }
}

export default withRouter(CountDown);
