import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  return (
    <div className="newsCard">
      <img
        src={newsItem.urlToImage}
        alt={newsItem.title}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="_blank">
              <b className="source">CNBC</b>
            </a>
            <span className="muted">
              by{newsItem.author ? newsItem.author : "Unknown"}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readMore">
            ReadMore{" "}
            <a href={newsItem.url} target="_blank">
              <b className="source">{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
