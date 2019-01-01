import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Member from './Member';

let members = [
  {
    name: "Rahul Nair",
    designation: "Organizer",
  },
  {
    name: "Minal Acharya",
    designation: "Curator",
  },
  {
    name: "Mayuresh Rane",
    designation: "Logistics & production head",
  },
  {
    name: "Unmesh Sawant",
    designation: "Co-organizer",
  },
  {
    name: "Simran Rane",
    designation: "Marketing Director",
  },
  {
    name: "Atharv Parte",
    designation: "Graphic Designer",
  },
  {
    name: "Abhishek Prajapati",
    designation: "Graphic Designer",
  },
  {
    name: "Bhagyashree Rao",
    designation: "Social Media Head",
  },
  {
    name: "Shalaka Naik",
    designation: "Documentation Head",
  },
  {
    name: "Janvi Chadha",
    designation: "Treasurer",
  },
]

class Team extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDx KCCEMSR - Team"
  }
  render() {
    let membersList = members.map((m, key)=> {
      return <Member key={key} member={m} time={key}/>
    })
    return (
      <div className="page">
        <section id="team">
          <div className="nav-space"></div>
          <div className="container">
            <h2 className="section-title">Team</h2>
              <p className="section-subtitle">Meet our awesome team.</p>
            <div className="section-body">
              <div className="center">
                {membersList}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Team);
