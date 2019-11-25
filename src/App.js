import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ThemeContext from "./ThemeContext";
import NewsList from "./NewsList";
import SelectedArticleURL from "./SelectedArticleURL";

export const App = () => {
  const [query, setQuery] = useState("react hooks");
  const [news, setNews] = useState([]);
  const [url, setUrl] = useState();
  const { theme, toggleDarkMode, toggleLightMode, logo } = useContext(
    ThemeContext
  );

  useEffect(() => {
    async function fetchData() {
      const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
      const result = await axios(url);
      setNews(result.data.hits.slice(0, 5));
    }

    fetchData();
  }, [query]);

  const handleSelectedArticle = article => {
    setUrl(article.url);
  };

  return (
    <div className={theme}>
      <button className="toggleThemeButton" onClick={() => toggleDarkMode()}>
        Dark Mode
      </button>
      <button className="toggleThemeButton" onClick={() => toggleLightMode()}>
        Light Mode
      </button>
      <div className="container">
        <img className="tdxLogo" alt="tdxLogo" src={logo} />
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <SelectedArticleURL url={url} />
        <NewsList news={news} onSelectArticle={handleSelectedArticle} />
      </div>
    </div>
  );
};
