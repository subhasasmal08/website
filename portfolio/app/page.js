"use client";
import React, { Component } from "react";
import Image from "next/image";
import hero from "../public/assets/Images/hero1.png";
import about from "../public/assets/Images/about.jpg";
import lineround from "../public/assets/Images/Line-round.png";
import blob from "../public/assets/Images/blob.png";
import "./home.scss";
import Benefits from "./component/Navbar/Benefits/Benefits";

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
              <h2>
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
                  <div>
                    {item.icon}
                    <div>
                      <p>{item.header}</p>
                      <div>{item.desc}</div>
                      <div>Read more </div>
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
        <div></div>
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

const ProblemSolving = (props) => (""
  // <svg
  //   id="svg2"
  //   xmlns:dc="http://purl.org/dc/elements/1.1/"
  //   xmlns:cc="http://creativecommons.org/ns#"
  //   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  //   xmlns:svg="http://www.w3.org/2000/svg"
  //   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  //   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  //   sodipodi:docname="New document 1"
  //   inkscape:version="0.48.4 r9939"
  //   xmlns="http://www.w3.org/2000/svg"
  //   xmlnsXlink="http://www.w3.org/1999/xlink"
  //   width="40px"
  //   height="40px"
  //   viewBox="0 0 1200 1200"
  //   enableBackground="new 0 0 1200 1200"
  //   xmlSpace="preserve"
  //   {...props}
  // >
  //   <g
  //     id="layer1"
  //     transform="translate(0,147.63782)"
  //     inkscape:label="Layer 1"
  //     inkscape:groupmode="layer"
  //   >
  //     <path
  //       id="rect3006"
  //       inkscape:connector-curvature={0}
  //       d="M471.749-147.637c-94.045,0-170.273,76.304-170.273,170.441 c0,46.55,18.624,88.767,48.842,119.528H0.001v284.069c31.224-36.108,77.389-59.006,128.842-59.006 c94.044,0,170.273,76.304,170.273,170.44c0,94.137-76.229,170.441-170.274,170.441C77.39,708.276,31.225,685.378,0,649.27v403.092 h368c-38.914-31.238-63.832-79.199-63.832-133.016c0-94.139,76.229-170.441,170.274-170.441 c94.044,0,170.272,76.305,170.272,170.441c0,53.814-24.918,101.775-63.832,133.016h328.253V696.307 c30.828,30.945,73.48,50.07,120.59,50.07c94.045,0,170.273-76.305,170.273-170.441c0-94.139-76.23-170.441-170.273-170.441 c-47.109,0-89.762,19.125-120.59,50.07V142.331H593.18c30.228-30.763,48.843-72.971,48.843-119.528 C642.023-71.334,565.793-147.637,471.749-147.637L471.749-147.637z"
  //     />
  //   </g>
  // </svg>
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
