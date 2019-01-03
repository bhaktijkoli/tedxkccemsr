import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

require('./../scripts/flipdown');

class CountDown extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var date1 = new Date(2019,1,16);
    var date2 = new Date();

    var secs = Math.abs((date1.getTime() - date2.getTime())/ 1000);
    console.log(secs);

    var twoDaysFromNow = (new Date().getTime() / 1000) + secs + 1;

    console.log(twoDaysFromNow);

    new FlipDown(twoDaysFromNow, 'countdown', {theme: 'light'}).start();
  }
  render() {
    return (
      <div className="container">
        <div className="center">
          <h1><span>Redifining</span> Perspective</h1>
          <div id="countdown" className="flipdown"></div>
          <span>A platform to bring leading thinkers and unheard voices, to share ideas worth spreading to local communities.</span>
        </div>
      </div>
    );
  }
}

export default withRouter(CountDown);
