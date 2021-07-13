
import React from 'react';
import "./style.css";

export default class PopUpFormContent extends React.Component {
  render() {
    return (
      <div className="form_container" style={{
        marginRight: 'auto',
        marginLeft: 'auto'
      }}>
        <form id="myForm" className="form_main">
          <label class="form_label">First Name</label>
          <br /> <br /> <br />
          <input class="form_input" name="First_Name" />
          <br /> <br /> <br />
          <label class="form_label">Last Name</label>
          <br /> <br /> <br />
          <input class="form_input" name="Last_Name" />
          <br /> <br /> <br />
          <label class="form_label">Email</label>
          <br /> <br /> <br />
          <input class="form_input" name="E-Mail" />
          <br /> <br />
        </form>
        <div class="button_container">
          <button onclick="SubForm()" class="form_button"><b>Subscribe</b></button>
        </div>
      </div>
    )
  }
}