import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";

import apikey from "./data/config";

function App() {
  const [category, setCategory] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&pageSize=${loadMore}&category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore]);
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
