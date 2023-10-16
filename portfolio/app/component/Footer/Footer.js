import React, { Component } from 'react'
import Image from "next/image";
import { Insta, Twitter, Youtube } from '../Navbar/Navbar';
import logo from "../../../public/assets/Images/Logo_Lyfes-3-01.png";
import Bg1 from "../../../public/assets/Images/Bg-1.png";
import "./footer.scss"



export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
        <Image src={Bg1} alt="Bg1" className="Bg1" placeholder="blur" />
        <div className="contact_wrapper">
          <p className='subscribe_'>Subscribe to newsletter</p>
          <p className='notify_'>Get notified for our latest news and offers</p>
          <div className="input_">
            <input
              className="email_input"
              placeholder="Your email address"
            ></input>
            <button className="btn">Subscribe Now</button>
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
    )
  }
}
