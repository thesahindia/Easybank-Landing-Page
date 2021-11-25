import React from "react";
import "./featureCard.scss";
export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <img src={icon} alt="online" />
      </div>

      <div className="feature-text">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
