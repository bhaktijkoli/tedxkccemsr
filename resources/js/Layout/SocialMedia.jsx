import React, { Component } from 'react';

class SocialMedia extends Component {
  render() {
    return (
      <ul className="social-media-panel">
        <li ><a className="facebook"><img src="/img/social/facebook.png"/></a></li>
        <li ><a className="twitter"><img src="/img/social/twitter.png"/></a></li>
        <li ><a className="instagram"><img src="/img/social/instagram.png"/></a></li>
        <li ><a className="linkedin"><img src="/img/social/linkedin.png"/></a></li>
      </ul>
    );
  }
}

export default SocialMedia;
