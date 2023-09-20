"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { Component } from 'react'
import "../Navbar/navbar.scss"

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };
  }
  render() {
    const navbarArr = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/About",
      },
      {
        name: "Services",
        link: "/Services",
      },
      {
        name: "Pages",
        link: "/Pages",
      },
      {
        name: "Blog",
        link: "/Blog",
      },
      {
        name: "Contact",
        link: "/Contact",
      },
    ];
    return (
      <div>
      <nav className="navbar">
        <ul className="navbar_ul">
          {navbarArr.map((item) => (
            <li
              key={item.link}
              className={this.props.pathname === item.link ? "active navbar_title" : "navbar_title"}
              // style={{ color: active === item.name && "active" }}
            >
              <Link
                className="navbar_title"
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    )
  }
}

const Page = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  return <Child {...props} router={router} pathname={pathname} />;
};

export default Page;
