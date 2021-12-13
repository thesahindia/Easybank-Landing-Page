import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import { Link } from "react-router-dom";
import "./navbar.scss";
import CustomButton from "../custom-button/CustomButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div
          className={`nav-list ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/" className="nav-link">
            About
          </Link>
          <Link to="/" className="nav-link">
            Contact
          </Link>
          <Link to="/" className="nav-link">
            Blog
          </Link>
          <Link to="/" className="nav-link">
            Careers
          </Link>
        </div>
        <div className="button">
          <CustomButton btn="primary">Request Invite</CustomButton>
        </div>
        <div className="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
    </nav>
  );
}
