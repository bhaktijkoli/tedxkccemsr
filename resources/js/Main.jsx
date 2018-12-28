import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Speakers from './Speakers/Speakers';
import Partners from './Partners/Partners';
import Team from './Team/Team';
import Contact from './Contact/Contact';

import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import SocialMedia from './Layout/SocialMedia';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={Home}/>
          <Route exact path="/speakers" component={Speakers}/>
          <Route exact path="/partners" component={Partners}/>
          <Route exact path="/Team" component={Team}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="*" component={Home}/>
        </Switch>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
