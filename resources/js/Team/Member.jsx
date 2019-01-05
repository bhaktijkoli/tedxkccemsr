import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Member extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let mem = this.refs.member;
    setTimeout(function () {
      mem.classList.remove('hidden');
      mem.classList.add('fadeInLeft');
    }, 100*this.props.time);
  }
  render() {
    return (
      <div className="member hidden" ref="member">
        <div className="backdrop"></div>
        <img src={"/img/team/"+this.props.member.tag+".jpg"}/>
        <h3 className="name">{this.props.member.name}</h3>
        <h4 className="designation">{this.props.member.designation}</h4>
      </div>
    );
  }
}

export default withRouter(Member);
