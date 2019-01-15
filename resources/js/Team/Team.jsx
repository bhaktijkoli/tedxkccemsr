import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Member from './Member';

let members = [
  {
    name: "Rahul Nair",
    designation: "Organizer",
    tag: 'rahul_nair',
  },
  {
    name: "Minal Acharya",
    designation: "Curator",
    tag: "minal_acharya",
  },
  {
    name: "Mayuresh Rane",
    designation: "Logistics & production head",
    tag: "mayuresh_rane",
  },
  {
    name: "Unmesh Sawant",
    designation: "Co-organizer",
    tag: "unmesh_sawant",
  },
  {
    name: "Simran Rane",
    designation: "Marketing Director",
    tag: "simran_rane",
  },
  {
    name: "Atharv Parte",
    designation: "Graphic Designer",
    tag: "atharv_parte",
  },
  {
    name: "Abhishek Prajapati",
    designation: "Graphic Designer",
    tag: "abhishek_prajapati",
  },
  {
    name: "Bhagyashree Rao",
    designation: "Social Media Head",
    tag: "bhagyashree_rao",
  },
  {
    name: "Janvi Chadha",
    designation: "Treasurer",
    tag: "janvi_chadha",
  },
]

class Team extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDxKCCEMSR - Team"
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
