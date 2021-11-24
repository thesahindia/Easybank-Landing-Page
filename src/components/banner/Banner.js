import React from "react";
import CustomButton from "../custom-button/CustomButton";
import img from "../../assets/image-mockups.png";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-content">
          <h1 className="heading"> Next generation digital banking </h1>
          <p className="sub-heading">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <CustomButton btn="primary">Request Invite</CustomButton>
        </div>
        <div className="banner-img">
          <img src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
}
