import React, { Component } from "react";
import Image from "next/image";
import Bg from "../../../public/assets/Images/Bg-6.png";
import { Quotes } from "@/app/page";
import "./reviewcomponent.scss"

export default class ReviewComponent extends Component {
  renderReviewData = [
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Cintya Hiott",
      role: "Entrepreneur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ",
    },
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Dipesh Adekar",
      role: "CEO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Sneha Sasmal",
      role: "Kid",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ",
    },
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Rupam Sasmal",
      role: "Idiot",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ",
    },
  ];
  render() {
    return (
      <div className="home_page_review_section">
        <div style={{ objectFit: "contain" }}>
          <Image src={Bg} alt="Bg" className="Bg" placeholder="blur" />
        </div>
        <div className="review_subwrapper">
          <div className="review_lhs">
            <h2 className="review_header">
              What <span style={{ color: "#C267D1" }}>They Say</span>
            </h2>
            <p className="review_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="review_slider">
            {this.renderReviewData.map((data) => {
              return (
                <div className="slider_wrapper">
                  <div className="slider_upper_wrapper">{data.content}</div>
                  <div className="slider_lower_wrapper">
                    <img className="review_pic" src={data.icon}></img>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span>{data.name}</span>
                        <span>{data.role}</span>
                      </div>
                    </div>
                    <Quotes />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
