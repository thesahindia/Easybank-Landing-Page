import React from "react";
import "./articleCard.scss";
export default function ArticleCard({ writer, title, description, img }) {
  return (
    <div className="article-card">
      <div className="article-card-img">
        <img src={img} alt="img" className="img" />
      </div>
      <div className="article-card-content">
        <span className="writer">{writer}</span>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
