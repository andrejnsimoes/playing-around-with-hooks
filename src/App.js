import React from "react";
import axios from "axios";

import ThemeContext from "./ThemeContext";
import NewsList from "./NewsList";
import SelectedArticleURL from "./SelectedArticleURL";

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "react hooks",
      news: [],
      url: undefined
    };

    this.fetchData = this.fetchData.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.handleSelectedArticle = this.handleSelectedArticle.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevState.query);
    if (prevState.query !== this.state.query) {
      this.fetchData();
    }
  }

  async fetchData() {
    const url = `https://hn.algolia.com/api/v1/search?query=${this.state.query}`;
    const result = await axios(url);
    this.setState({ news: result.data.hits.slice(0, 5) });
  }

  setQuery(query) {
    this.setState({ query, url: "" });
  }

  handleSelectedArticle(article) {
    this.setState({ url: article.url });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleDarkMode, toggleLightMode, logo }) => (
          <div className={theme}>
            <button
              className="toggleThemeButton"
              onClick={() => toggleDarkMode()}
            >
              Dark Mode
            </button>
            <button
              className="toggleThemeButton"
              onClick={() => toggleLightMode()}
            >
              Light Mode
            </button>
            <div className="container">
              <img className="tdxLogo" alt="tdxLogo" src={logo} />
              <input
                value={this.state.query}
                onChange={e => this.setQuery(e.target.value)}
              />
              <SelectedArticleURL url={this.state.url} />
              <NewsList
                news={this.state.news}
                onSelectArticle={this.handleSelectedArticle}
              />
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
