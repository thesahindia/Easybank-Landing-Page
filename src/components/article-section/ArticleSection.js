import React from "react";
import ArticleCard from "../article-card/ArticleCard";
import "./articleSection.scss";
import img1 from "../../assets/image-currency.jpg";
import img2 from "../../assets/image-restaurant.jpg";
import img3 from "../../assets/image-plane.jpg";
import img4 from "../../assets/image-confetti.jpg";

export default function ArticleSection() {
  const articles = [
    {
      writer: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      img: img1,
    },
    {
      writer: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      img: img2,
    },
    {
      writer: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      img: img3,
    },
    {
      writer: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      img: img4,
    },
  ];
  const articleCards = articles.map((article) => {
    return <ArticleCard key={article.title} {...article} />;
  });

  return (
    <div className="article-section">
        <div className="article-section-wrapper">
      <h2 className="heading">Latest Articles</h2>
      <div className="article-cards">
        {articleCards}
      </div>
    </div>
    </div>
  );
}
