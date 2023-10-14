import React, { Component } from "react";
import "./contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="service_contact_rhs">
        <div className="upper_">
          <div>
            <label req={"*"}>First Name </label>
            <input className="input_" />
          </div>
          <div>
            <label req={"*"}>Last Name </label>
            <input className="input_" />
          </div>
        </div>
        <div className="mid_">
          <div>
            <label req={"*"}>Email Address </label>
            <input className="input_" />
          </div>
        </div>
        <div className="lower_">
          <div>
            <label req={"*"}>Questions </label>
            <textarea className="input_" />
          </div>
        </div>
        <button className="btn">Send Message</button>
      </div>
    );
  }
}
