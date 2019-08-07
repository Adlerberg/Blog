import React from "react";
import "./style.scss";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">Cool Brand</Link>
      </h1>
      <ul className="navigation">
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
