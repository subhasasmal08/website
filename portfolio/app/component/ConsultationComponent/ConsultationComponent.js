import React, { Component } from "react";

export default class ConsultationComponent extends Component {
  render() {
    return (
      <div
        className="home_page_consultation
      "
      >
        <div className="background-overlay"></div>
        <div className="consultation_wrapper">
          <h2 className="consultation_header">
            Unlock Your <span style={{ color: "#C267D1" }}>Dreams</span>
          </h2>
          <p className="content_">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="btn">Start Consultation</button>
        </div>
      </div>
    );
  }
}
