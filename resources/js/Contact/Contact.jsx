import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    document.title = "TEDx KCCEMSR - Contact"
  }
  render() {
    return (
      <div className="page">
        <section id="contact">
          <div className="nav-space"></div>
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Have any queries? feel free to contact us.</p>
            <div className="section-body">
              <div className="row">
                <div className="col-sm-6">
                  <form method="POST" onSubmit={this.onSubmitContact.bind(this)}>
                    <div className="form-input">
                      <label>Fullname</label>
                      <input type="text" id="name" placeholder="Enter your fullname" />
                    </div>
                    <div className="form-input">
                      <label>Email</label>
                      <input type="text" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-input">
                      <label>Subject</label>
                      <input type="text" id="subject" placeholder="Enter your subject" />
                    </div>
                    <div className="form-input">
                      <label>Message</label>
                      <textarea id="message" placeholder="Enter your message" rows="6"/>
                    </div>
                    <button type="submit" className="button">Send</button>
                  </form>
                </div>
                <div className="col-sm-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1584.396878799198!2d72.98002808733317!3d19.179818462852708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4f1e032d9e4fc41!2sK+C+College+Of+Engineering+Management+Studies+And+Research!5e0!3m2!1sen!2sin!4v1514910475785" className="map" frameBorder="0" allowFullScreen></iframe>
                  <ul className="list-icons">
                    <li><i className="fa fa-envelope-o"></i>&nbsp;tedxkccemsr@gmail.com</li>
                    <li><i className="fa fa-phone"></i>&nbsp;+91 97570 52307</li>
                    <li><i className="fa fa-whatsapp"></i>&nbsp;+91 97570 52307</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  onSubmitContact(e) {
    e.preventDefault();
    let data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    }
    axios.post('/api/contact/', data).then(res=>{
      Swal({
        title: 'Thankyou for contacting us!',
        text: 'We will get in touch with you soon.',
        confirmButtonText: 'Ok',
        confirmButtonClass: 'button',
        buttonsStyling: false,
      });
    }).catch(res=> {
      if(res.response.status == 422) {
        let errors = res.response.data.errors;
        Swal({
          title: 'Error!',
          text: errors[Object.keys(errors)[0]][0],
          type: 'error',
          confirmButtonText: 'Ok',
          confirmButtonClass: 'button',
          buttonsStyling: false,
        });
      }
    })
  }
}

export default withRouter(Contact);
