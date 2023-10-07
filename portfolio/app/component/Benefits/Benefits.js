import React, { Component } from "react";
import "./benefits.scss";

export default class Benefits extends Component {
  render() {
    return <div className="benefits_wrapper">{this.props.icon}
    <p>{this.props.title}</p>
    <p>{this.props.content}</p>
    </div>;
  }
}
