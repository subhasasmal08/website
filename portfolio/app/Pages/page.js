"use client";
import React, { Component } from "react";
import "../Pages/pages.scss";
import Footer from "../component/Footer/Footer";
import lineround from "../../public/assets/Images/Line-round.png";
import blob from "../../public/assets/Images/404.png";
import Image from "next/image";

export default class page extends Component {
  render() {
    return (
      <div className="page_wrapper">
        <div className="page_not_found_wrapper">
          <div className="page_subwrapper">
            <h2 className="header_">404</h2>
            <p className="subheader_">Page Not Found</p>
            <p className="desc_">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable
            </p>
            <button className="btn">Back Home</button>
            <Image
              src={lineround}
              alt="lineround"
              className="lineround_image"
              placeholder="blur"
            />
            <Image
              src={blob}
              alt="blog"
              className="blog_image"
              placeholder="blur"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
