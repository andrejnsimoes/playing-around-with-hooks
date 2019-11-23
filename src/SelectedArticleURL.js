import React from "react";

const SelectedArticleURL = ({ url }) => (
  <section className="selectedArticleURL">
    {url ? (
      <a href={url} target="blank">
        {url}
      </a>
    ) : (
      <span>No article selected</span>
    )}
  </section>
);

export default SelectedArticleURL;
