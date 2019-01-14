import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CountDown from './CountDown';

class Home extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDx KCCEMSR"
  }
  componentDidMount() {
    navbar.classList.add('nav-transparent');
    window.addEventListener('scroll', this.checkScroll);
  }
  render() {
    return (
      <div className="page">
        <section id="home">
          <div className="backdrop"></div>
          <div className="nav-space"></div>
          <CountDown />
        </section>
        <section id="about">
          <div className="backdrop"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="section-title">About</h2>
              </div>
            </div>
            <div className="section-body">
              <div className="row">
                <div className="col-sm-6">
                  <h3>TED</h3>
                  <span>TED is a nonprofit organization devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. It is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world.</span>
                </div>
                <div className="col-sm-6">
                  <h3>TEDx</h3>
                  <span>TEDx is an international community that organizes TED-style events anywhere and everywhere -- celebrating locally-driven ideas and elevating them to a global stage. TEDx events are produced independently of TED conferences, each event curates speakers on their own, but based on TED's format and rules. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.</span>
                </div>
                <div className="col-sm-12">
                  <h3>What Is TEDxKCCEMSR?</h3>
                  <span>TEDxKCCEMSR is an independently organised TED- like event by K.C College Of Engineering And Management studies And Research. The scope of the event is to provide a platform where community-driven people can showcase their ideas and elevating them to a global stage. </span>
                </div>
                <div className="col-sm-12">
                  <div className="theme center">
                    <h3>Theme</h3>
                    <img src="/img/theme.png"/>
                  </div>
                  <p>With the advent of modern technology, human sciences and habitat, the challenges we face have also changed. Thus, the traditional ways of tackling them fail. Here arises the need of redefining perspectives. </p>
                  <p>Perspectives inspire decisions and your decisions fuel your actions.</p>
                  <p>Similarly, each individual has his or her own perspective when placed in common circumstance. However, the most unorthodox, original, economically and environmentally profiting perspective thrives the longest in a race.</p>
                  <p>The famous Penrose triangle is recognized as "Impossibility in it's purest form". At first glance, it's a three shade triangle with no possible story to tell, but on further inspection the complexity of the Penrose triangle from every angle puts our thought into a paradoxical perspective of everything we see.</p>
                  <p>We believe that making the impossible, possible is no lesser than an evolution of progress.   All you need is a redefined perspective to look at problem, adapt a bright idea and live through it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  checkScroll() {
    let navbar = document.getElementById('navbar');
    if(window.scrollY > 70) {
      navbar.classList.remove('nav-transparent');
    } else {
      navbar.classList.add('nav-transparent');
    }
  }
}

export default withRouter(Home);
