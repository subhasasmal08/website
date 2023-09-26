"use client";
import React, { Component } from "react";
import Image from "next/image";
import hero from "../public/assets/Images/hero1.png";
import "./home.scss";

export default class page extends Component {
  render() {
    return (
      <div className="home_page_main_wrapper">
        <div className="partition_wrapper">
          <div className="lhs_wrapper">
            <h1 className="lhs_header">
              Support your personal development and chase your dream
            </h1>
            <p className="lhs_subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <button className="lhs_button">Get Started Today</button>
          </div>
          <div className="rhs_wrapper">
            <Image src={hero} alt="hero" className="hero" placeholder="blur" />
          </div>
        </div>
      </div>
    );
  }
}
