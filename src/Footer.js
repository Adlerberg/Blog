import React from "react";
import StickyFooter from "react-sticky-footer";
import { Link } from "@reach/router";

export default function Footer() {
  return (
    <StickyFooter
      bottomThreshold={50}
      normalStyles={{ bottom: 0 }}
      stickyStyles={{ width: "100%" }}
    >
      <nav className="navbar">
        <ul className="navigation">
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </StickyFooter>
  );
}
