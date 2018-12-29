import React, { Component } from 'react';

class SocialMedia extends Component {
  render() {
    return (
      <ul className="social-media-panel">
        <li ><a href="https://www.facebook.com/TedxKccemsr-345713006169427" target="_blank" className="facebook"><img src="/img/social/facebook.png"/></a></li>
        <li ><a href="https://twitter.com/tedxkccemsr" target="_blank" className="twitter"><img src="/img/social/twitter.png"/></a></li>
        <li ><a href="https://www.instagram.com/tedxkccemsr_/" className="instagram"><img src="/img/social/instagram.png"/></a></li>
      </ul>
    );
  }
}

export default SocialMedia;
