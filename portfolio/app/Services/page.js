"use client";
import React, { Component } from "react";
import "./services.scss";
import ProvideComponent from "../component/ProvideComponent/ProvideComponent";
import ReviewComponent from "../component/ReviewComponent/ReviewComponent";
import PlanComponent from "../component/PlanComponent/PlanComponent";
import Footer from "../component/Footer/Footer";
import { Plan } from "../page";
import { Insta, Twitter, Youtube } from "../component/Navbar/Navbar";
import Contact from "../component/Contact/Contact";

export default class page extends Component {
  renderWorksData = [
    {
      icon: <Plan />,
      header: "Discover Your Values",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscin elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim",
    },
    {
      icon: <Plan />,
      header: "Clarify And Difine Goal",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscin elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim",
    },
    {
      icon: <Plan />,
      header: "Determine And Complete Goal",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscin elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim",
    },
  ];
  render() {
    return (
      <div className="service_wrapper">
        <div className="service_top_wrapper">
          <h2 className="service_header">services</h2>
          <p className="service_content">Lorem ipsum dolor sit amet</p>
        </div>
        <ProvideComponent type={"service"} />
        <div className="service_works_wrapper">
          <div className="service_works_subwrapper">
            <h2 className="work_header">
              How Its <span style={{ color: "#C267D1" }}>Works</span>
            </h2>
            <div className="works_wrapper">
              {this.renderWorksData.map((item) => {
                return (
                  <div className="works_card">
                    <p> {item.icon}</p>
                    <p>{item.header}</p>
                    <p> {item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="service_contact_wrapper">
          <div className="service_contact_subwrapper">
            <div className="service_contact_lhs">
              <h2>
                Ready To Take Action?{" "}
                <span style={{ color: "#F49785" }}>Lets Talk</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="address_wrapper">
                <p>You can also reach me :</p>
                <p>By Email : support@domain.com</p>
                <p>By Phone : (+62) 8123 456 789</p>
                <div>
                  On Social :
                  <div className="social_media_icons"> 
                    <Insta className="insta" />
                    <Twitter className="twitter" />
                    <Youtube className="youtube" />
                  </div>
                </div>
              </div>
            </div>
           <Contact/>
          </div>
        </div>
        <ReviewComponent />
        <PlanComponent />
        <Footer />
      </div>
    );
  }
}
