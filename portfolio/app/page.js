"use client";
import React, { Component } from "react";
import Image from "next/image";
import hero from "../public/assets/Images/hero1.png";
import about from "../public/assets/Images/about.jpg";
import lineround from "../public/assets/Images/Line-round.png";
import blob from "../public/assets/Images/blob.png";
import Bg from "../public/assets/Images/Bg-6.png";
import Bg1 from "../public/assets/Images/Bg-1.png";
import "./home.scss";
import Benefits from "./component/Navbar/Benefits/Benefits";
import logo from "../public/assets/Images/Logo_Lyfes-3-01.png";
import { Insta, Twitter, Youtube } from "./component/Navbar/Navbar";

export default class page extends Component {
  BenefitsData = [
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

  renderCountDivData = [
    { name: "persons_mentored", number: 80 },
    { name: "seminar_speaker", number: 35 },
    { name: "coaching_certificates", number: 12 },
  ];

  renderProvideData = [
    {
      header: "Identifying Passion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: <Direction />,
    },
    {
      header: "Stress Control",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: <StressControl />,
    },
    {
      header: "Problem Solving",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: <ProblemSolving />,
    },
    {
      header: "Growth Career",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: <GrowthCareer />,
    },
  ];

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

  renderBlogCards = [
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
  ];

  render() {
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
            {this.BenefitsData.map((item) => {
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
        <div className="home_page_about">
          <div className="home_page_about_lhs">
            <h2 className="about_me_">About Me</h2>
            <div className="count_wrapper">
              {this.renderCountDivData.map((item) => {
                return (
                  <div className="count_subwrapper">
                    <h2 className="count_">{item.number}</h2>
                    <span>{item.name.replaceAll("_", " ")}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="home_page_about_rhs">
            <h2 className="description_header">
              Hi, I'm <span style={{ color: "#F49785" }}>Subha</span>
            </h2>
            <div className="description_">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
            <button className="read_more_button">Read more</button>
          </div>
          <div className="home_page_about_image">
            <Image
              src={about}
              alt="about"
              className="about_image"
              placeholder="blur"
            />
            <Image
              src={lineround}
              alt="lineround"
              className="lineround_image"
              placeholder="blur"
            />
            <Image
              src={blob}
              alt="blob"
              className="blob_image"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="home_page_provide">
          <div className="home_page_provide_lhs">
            <div className="upper_">
              <h2 className="upper_header">
                What I <span style={{ color: "#F49785" }}>Provide</span>
              </h2>
              <div className="provide_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam ut porttitor leo.
              </div>
            </div>
            <div className="lower_">
              {this.renderProvideData.map((item) => {
                return (
                  <div className="provide_cards">
                    {item.icon}
                    <div className="provide_cards_wrapper">
                      <p className="provide_header">{item.header}</p>
                      <div className="provide_content">{item.desc}</div>
                      <div className="read_more_">
                        Read more
                        <Arrow />{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="home_page_provide_rhs">
            <Image
              src={about}
              alt="about"
              className="about_image"
              placeholder="blur"
            />
          </div>
        </div>
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
                  <div
                    className={index === 1 ? "plan_card middle" : "plan_card"}
                  >
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
                      <button className="plan_btn">Book a session</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
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
        <div className="home_page_blog">
          <div className="blog_wrapper">
            <h2 className="blog_header">
              Latest <span style={{ color: "#C267D1" }}>Blog</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="blog_cards_Wrapper">
              {this.renderBlogCards.map((item) => {
                return (
                  <div className="blog_card">
                    <img src={item.image} className="blog_image"></img>
                    <p>{item.header}</p>
                    <p>{item.date}</p>
                    <p>{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer">
          <Image src={Bg1} alt="Bg1" className="Bg1" placeholder="blur" />
          <div className="contact_wrapper">
            <p>Subscribe to newsletter</p>
            <p>Get notified for our latest news and offers</p>
            <div className="input_">
              <input
                className="email_input"
                placeholder="Your email address"
              ></input>
              <button className="contact_btn">Subscribe Now</button>
            </div>
          </div>

          <div className="upper_footer">
            <div className="lhs_footer_wrapper">
              <p>Connect</p>
              <p>Jalan Batu Mejan, Canggu, Badung Regency, Bali</p>
              <p>(+62) 8123 456 789</p>
              <p>support@domain.com</p>
            </div>
            <div className="mid_footer_wrapper">
              <Image
                src={logo}
                alt="logo"
                className="logo"
                placeholder="blur"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
              <div className="social_media_icons">
                <Insta className="insta" />
                <Twitter className="twitter" />
                <Youtube className="youtube" />
              </div>
            </div>
            <div className="rhs_footer_wrapper">
              <p>Navigation</p>
              <p>About</p>
              <p>Service</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="lower_footer">
            <p>Lyfes Template Kit by Jegtheme</p>
            <p>Copyright © 2021. All rights reserved.</p>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
const Tick = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="-0.5 0 25 25"
    fill="#c267d1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z"
      stroke="#0F0F0F"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.68 9.13L9.39001 17.42L6.76001 14.79"
      stroke="#0F0F0F"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Quotes = (props) => (
  <svg
    fill="#F4978575"
    width="45px"
    height="45px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M100,52H40A20.02292,20.02292,0,0,0,20,72v64a20.02292,20.02292,0,0,0,20,20H96v4a28.03146,28.03146,0,0,1-28,28,12,12,0,0,0,0,24,52.059,52.059,0,0,0,52-52V72A20.02292,20.02292,0,0,0,100,52Zm-4,80H44V76H96ZM216,52H156a20.02292,20.02292,0,0,0-20,20v64a20.02292,20.02292,0,0,0,20,20h56v4a28.03146,28.03146,0,0,1-28,28,12,12,0,0,0,0,24,52.059,52.059,0,0,0,52-52V72A20.02292,20.02292,0,0,0,216,52Zm-4,80H160V76h52Z" />
  </svg>
);

const Plan = (props) => (
  <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="40px"
    height="40px"
    viewBox="0 0 495.224 495.224"
    style={{
      enableBackground: "new 0 0 495.224 495.224",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        style={{
          fill: "#c267d1",
        }}
        d="M461.188,279.177c-1.938-6.548-3.563-13.271-5.877-19.691c-3.438-9.467-7.287-18.78-11.015-28.109 c-3.472-8.797-6.398-17.739-8.137-27.033c-0.396-2.062,0.289-4.466,0.922-6.573c0.902-3.056,2.369-5.949,3.271-8.987 c0.396-1.239,0.056-2.757-0.233-4.086c-5.786-26.256-14.285-51.535-26.545-75.549c-1.178-2.296-2.299-4.629-3.49-7.097 c3.728-2.351,7.414-4.647,11.229-6.998c-10.867-18.164-23.055-35.053-39.618-48.714c3.58-1.365,6.729-2.631,10.071-3.87 c-0.31-0.353-0.452-0.633-0.775-0.814c-13.453-9.855-27.955-17.703-43.472-23.887c-20.867-8.336-42.458-13.815-64.733-16.41 c-6.854-0.778-13.763-0.904-20.669-1.329c-0.436-0.036-20.198-0.036-21.03-0.018c-14.34,0.389-28.463,2.369-42.566,5 c-15.84,2.884-31.373,6.908-46.399,12.613c-22.711,8.607-43.777,20.09-61.751,36.789C82.36,61.855,75.236,70.019,68.69,78.762 c-8.915,11.853-16.076,24.682-21.862,38.308c-6.003,14.204-9.837,28.959-11.591,44.275c-0.488,4.521-0.814,9.077-1.193,13.607 c-1.283,26.626,2.025,40.984,3.598,49.112c1.43,7.314,3.545,14.511,5.986,21.554c8.336,24.159,20.723,46.112,37.195,65.695 c11.627,13.798,21.5,28.806,30.197,44.573c14.104,25.565,24.628,52.526,31.265,81.009c1.031,4.446,1.375,8.933,1.411,13.489 c0.054,10.737,0.199,21.535,0.379,32.274c0.056,4.214,0.091,8.372,0.199,12.566H359.89l0.146-53.853 c0.309-6.547,0.832-13.057,1.971-19.455c0.925-5.025,4.216-9.365,9.584-11.104c7.597-2.496,13.037-2.644,20.903-1.701 c8.083,0.979,16.039,2.314,24.122,3.002c2.712,0.271,6.003,0.234,8.752-0.521c4.016-1.178,7.194-4.216,9.907-7.323 c4.285-5.026,5.729-10.813,4.122-17.305c-0.506-2.08-0.648-4.25-0.978-6.387c-0.633-4.482,1.593-8.063,3.854-11.605 c0.888-1.375,1.973-2.645,2.784-4.051c2.729-4.772,2.261-12.404-1.191-16.619c-1.811-2.1-3.962-3.868-6.005-5.804 c-0.507-0.474-1.119-0.903-1.698-1.306c2.459-1.59,4.898-2.944,7.032-4.664c1.72-1.375,3.236-3.073,4.468-4.883 c1.607-2.352,1.917-5.01,0.938-7.793c-2.565-7.089-4.249-14.305-5.136-21.789c-0.309-2.531-0.198-5.063-0.146-7.541 c0.035-0.451,0.705-1.121,1.213-1.354c2.15-1.051,4.304-2.024,6.563-2.896C464.117,285.306,461.188,279.394,461.188,279.177z  M341.371,136.295c2.131,15.835-9.194,30.842-26.228,36.373c-5.003,3.989-11.326,6.843-18.283,8.243 c-5.865,6.437-14.479,11.149-24.501,12.444c-9.088,1.268-17.647-0.555-24.712-4.377c-3.998,13.043-37.042,13.395-53.405,15.597 c-16.795,2.205-35.962,67.872-43.189,38.151c-1.19-5.988-21.106-67.654-49.495-72.349c-10.257-1.473,10.711-6.327,6.112-7.442 c-15.307-3.769-16.927-14.866-18.9-29.441c-1.268-9.159,1.761-18.054,7.486-25.285c-0.035-0.238-0.141-0.467-0.176-0.705 c-1.655-12.232,6.482-23.752,19.059-28.931c6.147-9.96,17.314-17.464,30.895-19.807c5.038-3.822,11.273-6.473,18.266-7.451 c6.024-0.828,11.783-0.123,17.015,1.532c1.85-0.431,3.558-0.951,5.425-1.171c4.104-0.573,8.067-0.467,11.959-0.106 c4.333-3.602,9.881-6.2,16.223-7.089c8.93-1.154,17.296,1.321,23.285,6.077c6.271-4.509,13.897-7.732,22.494-8.921 c8.174-1.101,15.978-0.115,22.95,2.308c17.913-1.735,34.241,5.733,42.379,18.327c10.464,4.685,18.072,13.492,19.568,24.474 c0.563,4.016,0.088,7.935-1.021,11.722c2.043,3.373,3.522,7.037,4.122,11.07c1.146,8.913-1.938,17.57-7.909,24.421 C340.967,134.771,341.265,135.474,341.371,136.295z"
      />
    </g>
  </svg>
);

const Arrow = (props) => (
  <svg
    fill="#c267d1"
    width="20px"
    height="20px"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    id="arrow"
    {...props}
  >
    <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
  </svg>
);

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
    <style type="text/css">{"\n\t.linesandangles_een{fill:\n"}</style>
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

const Direction = (props) => (
  <svg
    fill="#F49785"
    width="40px"
    height="40px"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1017.06 186.064L917.364 74.721a31.964 31.964 0 0 0-23.937-10.752H543.171V30.001c0-16.56-14.336-30-32-30s-32 13.44-32 30V63.97H223.363c-17.68 0-32 14.32-32 32v223.664c0 17.68 14.32 32 32 32h255.808v64.096H130.58a31.963 31.963 0 0 0-23.936 10.752L6.963 539.793c-10.752 12.128-10.752 30.368 0 42.496l99.68 112.288c6.112 6.847 14.784 9.744 23.936 9.744h348.592V994c0 16.56 14.336 30 32 30s32-13.44 32-30V704.32h256.464c17.68 0 32-14.32 32-32V447.713c0-17.68-14.32-32-32-32H543.171v-64.096h350.256a31.963 31.963 0 0 0 23.937-10.752l99.696-112.32c10.736-12.112 10.736-30.352 0-42.48v-.001zM767.647 640.321H144.959l-71.28-79.28 71.28-81.312h622.688v160.592zm111.392-352.688h-623.68V127.969h623.68l71.28 79.344z" />
  </svg>
);

const StressControl = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 256 209"
    enableBackground="new 0 0 256 209"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M96.5,56.877c15.434,0,27.946,12.512,27.946,27.946S111.934,112.77,96.5,112.77s-27.946-12.512-27.946-27.946 S81.066,56.877,96.5,56.877z M135.386,103.23c-5.954-2.213-12.573,0.823-14.785,6.775l-15.487,41.689 c0,0-27.503-38.023-27.802-38.35c-5.792-8.471-16.386-11.099-26.869-8.642c-28.795,6.752-43.671,37.407-47.444,81.165 C2.549,191.072,2,206.875,2,206.875h78.586V186.47v-0.419v-29.032l16.378,22.663c2.551,3.525,6.6,5.562,10.873,5.562 c0.603,0,1.212-0.041,1.82-0.124c4.92-0.669,9.051-3.976,10.782-8.633l21.722-58.471C144.373,112.062,141.34,105.442,135.386,103.23 z M96.5,191.125H254v15.75H96.5V191.125z M167.375,167.5h70.875v11.985h-70.875V167.5z M167.375,120.25h70.875v11.813h-70.875 V120.25z M167.375,73.011h70.875v11.813h-70.875V73.011z M175.25,49.375h70.875v11.813H175.25V49.375z M143.75,25.873h70.875v11.813 H143.75V25.873z M120.125,2.125H191v11.813h-70.875V2.125z M183.125,143.875H254v11.985h-70.875V143.875z M183.125,96.625H254 v11.813h-70.875V96.625z" />
  </svg>
);

const ProblemSolving = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="40px"
    height="40px"
    viewBox="0 0 35 32"
    enableBackground="new 0 0 35 32"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        fill="#F49785"
        d="M20.042,3.907C20.042,1.962,18.483,0,15,0c-3.067,0-5.129,1.57-5.129,3.907 c0,1.364,0.552,1.986,0.917,2.398c0.193,0.217,0.271,0.315,0.271,0.413c0,0.162,0,0.26-0.558,0.282H4.403C2.058,7,0,8.869,0,11 v3.732c0.038,0.944,0.571,1.531,1.392,1.531c0.467,0,0.813-0.267,1.149-0.526C2.991,15.392,3.5,15,4.5,15C6.196,15,8,16.402,8,19 c0,2.629-1.828,4.462-3.469,4.462c-0.99,0-1.508-0.429-1.966-0.807c-0.343-0.284-0.697-0.578-1.174-0.578 c-0.82,0-1.354,0.587-1.392,1.551v4.102C0,29.965,2.099,32,4.403,32l6.129,0c0.928-0.038,1.527-0.585,1.527-1.396 c0-0.487-0.277-0.8-0.522-1.076c-0.328-0.369-0.666-0.75-0.666-1.734c0-1.766,1.604-2.907,4.085-2.907 c2.482,0,4.086,1.141,4.086,2.907c0,0.984-0.339,1.365-0.666,1.734c-0.245,0.276-0.523,0.589-0.523,1.076 c0,0.822,0.585,1.356,1.548,1.395L23.342,32c2.152,0,3.656-1.677,3.656-4.078v-4.65c0.026-0.122,0.334-0.588,0.804-0.588 c0.096,0,0.193,0.079,0.409,0.271c0.41,0.367,1.031,0.922,2.393,0.922C32.788,23.876,35,22.202,35,19c0-3.454-2.009-5-4-5 c-1.344,0-2.12,0.614-2.634,1.02c-0.228,0.18-0.442,0.35-0.564,0.35c-0.471,0-0.779-0.468-0.802-0.571 c-0.001-0.008-0.001-0.016-0.002-0.024v-3.583C26.998,8.763,25.46,7,23.342,7h-3.921c-0.013-0.001-0.026-0.002-0.04-0.003 c-0.528-0.02-0.528-0.117-0.528-0.279c0-0.098,0.078-0.195,0.271-0.413C19.489,5.894,20.042,5.271,20.042,3.907z M18.376,5.642 c-0.245,0.276-0.523,0.59-0.523,1.077c0,0.55,0.251,1.212,1.471,1.277C19.347,7.999,19.37,8,19.394,8h3.948 C25.086,8,26,9.606,26,11.192v3.633c0,0.036-0.007,0.071,0,0.105c0.092,0.611,0.842,1.439,1.802,1.439 c0.47,0,0.816-0.274,1.185-0.565C29.463,15.427,30.004,15,31,15c1.822,0,3,1.57,3,4c0,2.664-1.761,3.876-3.396,3.876 c-0.979,0-1.359-0.339-1.727-0.667c-0.276-0.246-0.589-0.525-1.075-0.525c-0.96,0-1.711,0.829-1.802,1.44 c-0.007,0.034,0,0.069,0,0.105v4.694C26,29.454,25.177,31,23.342,31h-3.921c-0.568-0.023-0.568-0.285-0.568-0.396 c0-0.097,0.078-0.195,0.271-0.413c0.365-0.412,0.918-1.034,0.918-2.398c0-1.945-1.572-3.907-5.086-3.907 c-3.041,0-5.085,1.57-5.085,3.907c0,1.364,0.552,1.986,0.918,2.398c0.192,0.217,0.271,0.315,0.271,0.413 c0,0.112,0,0.374-0.548,0.396H4.403C2.686,31,1,29.38,1,27.73v-4.082c0.022-0.571,0.281-0.571,0.392-0.571 c0.116,0,0.32,0.169,0.537,0.348c0.498,0.413,1.253,1.037,2.603,1.037C6.689,24.462,9,22.267,9,19c0-3.248-2.318-5-4.5-5 c-1.34,0-2.079,0.568-2.568,0.945c-0.222,0.171-0.414,0.318-0.54,0.318c-0.11,0-0.369,0-0.392-0.551V11c0-1.768,1.794-3,3.403-3 h6.115c0.016,0,0.031-0.001,0.047-0.002v0c1.235-0.046,1.494-0.722,1.494-1.28c0-0.487-0.277-0.8-0.522-1.076 c-0.328-0.369-0.666-0.75-0.666-1.735C10.871,2.168,12.53,1,15,1c2.455,0,4.042,1.141,4.042,2.907 C19.042,4.891,18.703,5.273,18.376,5.642z"
      />
    </g>
  </svg>
);

const GrowthCareer = (props) => (
  <svg
    width="40px"
    height="40px"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 490 490"
    style={{
      enableBackground: "new 0 0 490 490",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <g>
          <path d="M440,450V100c0-5.522-4.477-10-10-10h-70c-5.523,0-10,4.478-10,10v350h-10V190c0-5.522-4.477-10-10-10h-70 c-5.523,0-10,4.478-10,10v260h-10V250c0-5.522-4.477-10-10-10h-70c-5.523,0-10,4.478-10,10v200h-10V320c0-5.522-4.477-10-10-10 H60c-5.523,0-10,4.478-10,10v130H0v20h490v-20H440z M120,450H70v-75h50V450z M120,355H70v-25h50V355z M220,450h-50V305h50V450z  M220,285h-50v-25h50V285z M320,450h-50V245h50V450z M320,225h-50v-25h50V225z M420,450h-50V155h50V450z M420,135h-50v-25h50V135 z" />
          <path d="M57.072,282.072L285,54.143V90h20V30c0-5.522-4.477-10-10-10h-65v20h40.857L42.929,267.929L57.072,282.072z" />
        </g>
      </g>
    </g>
  </svg>
);
