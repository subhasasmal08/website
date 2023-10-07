import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div className="service_contact_rhs">
        <div className="upper_">
          <label>
            <p>First Name </p>
            <input />
          </label>
          <label>
            <p>Last Name </p>
            <input />
          </label>
        </div>
        <div className="mid_">
        <label>
            <p>Email Address </p>
            <input />
          </label>
        </div>
        <div className="lower_">
        <label>
            <p>Email Address </p>
            <textarea />
          </label>
        </div>
        <button className="btn">Send Message</button>
      </div>
    )
  }
}
