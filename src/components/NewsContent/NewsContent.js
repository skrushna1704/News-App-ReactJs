import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
