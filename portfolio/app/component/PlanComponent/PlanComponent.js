import { Plan, Tick } from "@/app/page";
import React, { Component } from "react";
import "./plancomponent.scss"

export default class PlanComponent extends Component {
  renderPlanData = [
    {
      icon: <Plan />,
      header: "Base Plan",
      Subheader: "What you'll get",
      points: [
        "1 on 1 Session",
        "100 Minutes Session",
        "Career Counselling",
        "Customize Goal Path",
        "Development Perspective",
        "Career Advice",
      ],
      price: "$65/Month",
    },
    {
      icon: <Plan />,
      header: "Pro Plan",
      Subheader: "What you'll get",
      points: [
        "1 on 1 Session",
        "100 Minutes Session",
        "Career Counselling",
        "Customize Goal Path",
        "Development Perspective",
        "Career Advice",
        "Support Over Email",
      ],
      price: "$65/Month",
    },
    {
      icon: <Plan />,
      header: "Elite Plan",
      Subheader: "What you'll get",
      points: [
        "1 on 1 Session",
        "100 Minutes Session",
        "Career Counselling",
        "Customize Goal Path",
        "Development Perspective",
        "Career Advice",
      ],
      price: "$65/Month",
    },
  ];
  render() {
    return (
      <div className="home_page_plan">
        <div className="home_page_plan_wrapper">
          <h2 className="plan_header">
            Learn the secrets to{" "}
            <span style={{ color: "#c267d1" }}>Life Success</span>
          </h2>
          <p className="plan_card_content">
            Maximize your potentials now, several bundle packages that you can
            choose
          </p>
          <div className="plan_cards_wrapper">
            {this.renderPlanData.map((item, index) => {
              return (
                <div className={index === 1 ? "plan_card middle" : "plan_card"}>
                  <div className="upper_plan_card">
                    {item.icon}
                    <p className="plan_card_header">{item.header}</p>
                    <p className="plan_subheader">{item.Subheader}</p>
                  </div>
                  <div className="plan_content">
                    {item.points.map((data) => {
                      return (
                        <p className="tick_sen">
                          <Tick />
                          {data}
                        </p>
                      );
                    })}
                  </div>
                  <p className="line"></p>
                  <div className="pricing_wrapper">
                    <p>{item.price}</p>
                    <button className="btn">Book a session</button>
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
