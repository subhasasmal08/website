"use client";
import React, { Component } from "react";
import Image from "next/image";
import hero from "../public/assets/Images/hero1.png";
import "./home.scss";
import Benefits from "./component/Navbar/Benefits/Benefits";

export default class page extends Component {
  render() {
    const BenefitsData = [
      {
        icon: <Star />,
        title: "Achieve Life Goals",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        icon: <Consultancy />,
        title: "Ask Consultancy ",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        icon: <Mindfullness />,
        title: "Mindfullness",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        icon: <SelfDevelopment />,
        title: "Self Development",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ];
    return (
      <div className="home_page">
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
              <Image
                src={hero}
                alt="hero"
                className="hero"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="home_page_benefit">
          <h2 className="benefit_header">
            Coaching
            <span className="benefit_">Benefit</span>
          </h2>
          <p className="benefit_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="benefits_block">
            {BenefitsData.map((item) => {
              return (
                <Benefits
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

const Star = (props) => (
  <svg
    fill="#F49785"
    width="45px"
    height="45px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
  </svg>
);

const Consultancy = (props) => (
  <svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#F49785"
    width="45px"
    height="45px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">{"\n\t.linesandangles_een{fill:#111918;}\n"}</style>
    <path
      className="linesandangles_een"
      d="M4,24h5l5,5v-5h7V10H4V24z M6,12h13v10h-7v2.172L9.828,22H6V12z M28,4v14h-3l-3,3v-2.828 L24.172,16H26V6H13v3h-2V4H28z"
    />
  </svg>
);

const Mindfullness = (props) => (
  <svg
    fill="#F49785"
    width="45px"
    height="45px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 18C19.9545 18 20.9173 7.82917 20.9935 2.99666C21.0023 2.44444 20.54 1.99901 19.9878 2.00915C3 2.32115 3 10.5568 3 18V22"
      stroke="#000000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18C3 18 3 12 11 11"
      stroke="#000000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SelfDevelopment = (props) => (
  <svg
    fill="#F49785"
    width="45px"
    height="45px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
  >
    <path d="M22.60107,2.062a1.00088,1.00088,0,0,0-.71289-.71289A11.25224,11.25224,0,0,0,10.46924,4.97217L9.35431,6.296l-2.6048-.62848A2.77733,2.77733,0,0,0,3.36279,7.0249L1.1626,10.9248A.99989.99989,0,0,0,1.82422,12.394l3.07275.65869a13.41952,13.41952,0,0,0-.55517,2.43409,1.00031,1.00031,0,0,0,.28466.83642l3.1001,3.1001a.99941.99941,0,0,0,.707.293c.02881,0,.05762-.00147.08692-.00391a12.16892,12.16892,0,0,0,2.49157-.49l.64368,3.00318a1.0003,1.0003,0,0,0,1.46924.66162l3.90527-2.20264a3.03526,3.03526,0,0,0,1.375-3.30371l-.6687-2.759,1.23706-1.13751A11.20387,11.20387,0,0,0,22.60107,2.062ZM3.57227,10.72314,5.12842,7.96338a.82552.82552,0,0,1,1.06982-.37549l1.71741.4162-.65.77179A13.09523,13.09523,0,0,0,5.67633,11.174Zm12.47021,8.22217L13.32666,20.477l-.4295-2.00464a11.33992,11.33992,0,0,0,2.41339-1.61987l.74353-.68366.40344,1.66462A1.041,1.041,0,0,1,16.04248,18.94531ZM17.65674,11.98l-3.68457,3.38623a9.77348,9.77348,0,0,1-5.17041,2.3042l-2.4043-2.4043a10.932,10.932,0,0,1,2.40088-5.206l1.67834-1.99268a.9635.9635,0,0,0,.07813-.09277L11.98975,6.271a9.27757,9.27757,0,0,1,8.80957-3.12012A9.21808,9.21808,0,0,1,17.65674,11.98Zm-.923-6.16376a1.5,1.5,0,1,0,1.5,1.5A1.49992,1.49992,0,0,0,16.7337,5.81622Z" />
  </svg>
);
