"use client";
import React, { Component } from "react";
import "./blog.scss";
import BlogComponent from "../component/BlogComponent/BlogComponent";
import Footer from "../component/Footer/Footer";

export default class Page extends Component {
  render() {
    return (
      <div className="blog_wrapper">
        <div className="blog_top_wrapper">
          <h2 className="blog_header">Blogs</h2>
          <p className="blog_content">Stay update about blog and article</p>
        </div>
        <BlogComponent/>
        <Footer/>
      </div>
    );
  }
}
