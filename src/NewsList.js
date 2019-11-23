import React from "react";
const NewsList = ({ news, onSelectArticle }) => {
  return (
    <section className="newsList">
      <ul>
        {news.map(article => (
          <li key={article.objectID} onClick={() => onSelectArticle(article)}>
            {article.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
