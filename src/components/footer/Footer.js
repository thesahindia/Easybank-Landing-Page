import React from "react";
import "./footer.scss";
import { ReactComponent as Logo } from "../../assets/footer-logo.svg";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icon-youtube.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/CustomButton";
export default function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-wrapper">
        <div className="left-section">
          <div className="logo-container">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="social-media">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pinterest />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <div className="link-section">
            <div className="footer-links-column1">
              <Link className="footer-link" to="/">
                About Us
              </Link>
              <Link className="footer-link" to="/">
                Blog
              </Link>
              <Link className="footer-link" to="/">
                Support
              </Link>
            </div>
            <div className="footer-links-column2">
              <Link className="footer-link" to="/">
                Careers
              </Link>
              <Link className="footer-link" to="/">
                Contact
              </Link>
              <Link className="footer-link" to="/">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="right-section">
          <CustomButton btn="primary">Request Invite</CustomButton>
          <div className="copyright"> &copy; Easybank. All Rights Reserved</div>
        </div>
      </div>
    </div>
    <div className="author">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            href="https://www.github.com/thesahindia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sahil
          </a>
          .
        </div>
    </>
  );
}
