import React from "react";
import "./featureSection.scss";
import icon1 from "../../assets/icon-online.svg";
import icon2 from "../../assets/icon-budgeting.svg";
import icon3 from "../../assets/icon-onboarding.svg";
import icon4 from "../../assets/icon-api.svg";
import FeatureCard from "../feature-card/FeatureCard";
export default function FeatureSection() {
  const features = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: icon1,
    },
    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: icon2,
    },
    {
      title: " Fast Onboarding",
      description:
        " We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: icon3,
    },
    {
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: icon4,
    },
  ];
  const renderFeatures = () => {
    return features.map((feature) => {
      return <FeatureCard key={feature.title} {...feature} />;
    });
  };

  return (
    <div className="feature-section">
      <div className="feature-section-wrapper">
        <div className="feature-heading">
          <h2 className="title">Why Choose Easybank?</h2>
          <p className="description">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="feature-list">{renderFeatures()}</div>
      </div>
    </div>
  );
}
