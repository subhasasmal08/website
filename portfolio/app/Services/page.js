"use client";
import React, { Component } from "react";
import "./services.scss";
import ProvideComponent from "../component/ProvideComponent/ProvideComponent";
import ReviewComponent from "../component/ReviewComponent/ReviewComponent";
import PlanComponent from "../component/PlanComponent/PlanComponent";
import Footer from "../component/Footer/Footer";
import { Insta, Twitter, Youtube } from "../component/Navbar/Navbar";
import Contact from "../component/Contact/Contact";
import values from "../../public/assets/Images/values.png";
import doc from "../../public/assets/Images/doc.png";
import goal from "../../public/assets/Images/goal.png";
import Image from "next/image";
import BigStar from "../../public/assets/Images/Bigstar.png";


export default class page extends Component {
  renderWorksData = [
    {
      icon: values,
      header: "Discover Your Values",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscin elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim",
    },
    {
      icon: doc,
      header: "Clarify And Difine Goal",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscin elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim",
    },
    {
      icon: goal,
      header: "Determine And Complete Goal",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscin elit, sed eiusmod tempor incididunt labore et dolore magna aliqua minim",
    },
  ];
  render() {
    return (
      <div className="service_wrapper">
        <div className="service_top_wrapper">
        <div className="service_header">
            <Image
              src={BigStar}
              alt="BigStar"
              className="bigstar_image"
              placeholder="blur"
            />
            <h2 className="service_">Services</h2>
            <Image
              src={BigStar}
              alt="smallStar"
              className="smallstar_image"
              placeholder="blur"
            />
          </div>
          <p className="service_content">Lorem ipsum dolor sit amet</p>
        </div>
        <ProvideComponent type={"service"} />
        <div className="service_works_wrapper">
          <div className="service_works_subwrapper">
            <h2 className="work_header">
              How Its <span style={{ color: "#C267D1" }}>Works</span>
            </h2>
            <div className="works_wrapper">
              {this.renderWorksData.map((item, index) => {
                return (
                  <div className="works_card">
                    <div className="works_image_wrapper">
                      <Image
                        src={item.icon}
                        alt="works_images"
                        className="works_images"
                        placeholder="blur"
                      />
                    </div>
                    {index !== this.renderWorksData.length - 1 && (
                      <div className="divider"></div>
                    )}
                    <p className="header_">{item.header}</p>
                    <p className="content_"> {item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ReviewComponent />
        <PlanComponent />
        <div className="service_contact_wrapper">
          <div className="service_contact_subwrapper">
            <div className="service_contact_lhs">
              <div className="header_">
                <p style={{ width: "500px", margin: "0"  }}>Ready To Take Action?</p>
                <p style={{ color: "#C267D1", margin: "0" }}>Lets Talk</p>
              </div>
              <p className="content_">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="address_wrapper">
                <p className="reach_">You can also reach me :</p>
                <p>By Email : support@domain.com</p>
                <p>By Phone : (+62) 8123 456 789</p>
                <div className="medias_wrapper">
                  On Social :
                  <div className="social_media_icons">
                    <Insta className="insta" />
                    <Twitter className="twitter" />
                    <Youtube className="youtube" />
                  </div>
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
