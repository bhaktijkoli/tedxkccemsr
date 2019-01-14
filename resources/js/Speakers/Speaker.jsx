import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Speaker extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let mem = this.refs.speaker;
    setTimeout(function () {
      mem.classList.remove('hidden');
      mem.classList.add('fadeInLeft');
    }, 100*this.props.time);
  }
  render() {
    return (
      <div className="speaker hidden" ref="speaker">
        <div className="speaker-box">
          <img src={"/img/speakers/" + this.props.speaker.image +".png"} width="220" alt={this.props.speaker.name}/>
        </div>
        <h3 className="name">{this.props.speaker.name}</h3>
        <h4 className="designation">{this.props.speaker.designation}</h4>
      </div>
    );
  }
}

export default withRouter(Speaker);
