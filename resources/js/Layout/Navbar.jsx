import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getClassName = this.getClassName.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.onMenuItemClick2 = this.onMenuItemClick2.bind(this);
    this.onMenuToggleClick = this.onMenuToggleClick.bind(this);
    this.props.history.listen(this.onNavChange.bind(this));
  }
  render() {
    return (
      <nav id="navbar">
        <div className="container">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo"/>
          </div>
          <ul className="nav-items nav-items-full">
            <li><a className={this.getClassName('/')} onClick={e=>this.onMenuItemClick("/")}>About</a></li>
            <li><a className={this.getClassName('/speakers')} onClick={e=>this.onMenuItemClick("/speakers")}>Speakers</a></li>
            <li><a className={this.getClassName('/partners')} onClick={e=>this.onMenuItemClick("/partners")}>Partners</a></li>
            <li><a className={this.getClassName('/team')} onClick={e=>this.onMenuItemClick("/team")}>Team</a></li>
            <li><a className={this.getClassName('/contact')} onClick={e=>this.onMenuItemClick("/contact")}>Contact</a></li>
          </ul>
          <div className="button_container" id="toggle" onClick={this.onMenuToggleClick}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
          <div id="nav-overlay">
            <div className="menu">
              <ul>
                <li><a className={this.getClassName('/')} onClick={e=>this.onMenuItemClick2("/")}>About</a></li>
                <li><a className={this.getClassName('/speakers')} onClick={e=>this.onMenuItemClick2("/speakers")}>Speakers</a></li>
                <li><a className={this.getClassName('/partners')} onClick={e=>this.onMenuItemClick2("/partners")}>Partners</a></li>
                <li><a className={this.getClassName('/team')} onClick={e=>this.onMenuItemClick2("/team")}>Team</a></li>
                <li><a className={this.getClassName('/contact')} onClick={e=>this.onMenuItemClick2("/contact")}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  getClassName(menu) {
    if(this.props.history.location.pathname == menu) {
      return "nav-item active"
    } else {
      return "nav-item"
    }
  }
  onMenuItemClick(menu) {
    if(this.props.history.location.pathname == menu) {
      return
    }

    let comp = this;
    let page = document.querySelector('.page');
    page.classList.add('fadeOutLeft');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setTimeout(()=> {
      comp.props.history.push(menu);
    }, 500);
  }
  onMenuItemClick2(menu) {
    var toggle = document.getElementById('toggle');
    var navOverlay = document.getElementById('nav-overlay')
    toggle.classList.remove('active');
    navOverlay.classList.remove('open');
    let comp = this;
    setTimeout(()=> {
      comp.onMenuItemClick(menu);
    }, 300);
  }
  onNavChange() {
    let comp = this;
    let page = document.querySelector('.page');
    page.classList.add('fadeInRight');
  }
  onMenuToggleClick() {
    var toggle = document.getElementById('toggle');
    var navOverlay = document.getElementById('nav-overlay')
    toggle.classList.toggle('active');
    navOverlay.classList.toggle('open');
  }
}

export default withRouter(Navbar);
