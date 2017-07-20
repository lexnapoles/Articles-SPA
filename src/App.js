import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';

class App extends Component {
  static getArticles({ data: { articles } }) {
    return articles;
  }

  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY)
      .then(App.getArticles)
      .then(articles => this.setState({ articles }));
  }

  // Renders
  render() {
    return (
      <div>
        <header />
        <main />
        <footer />
      </div>
    );
  }
}

export default App;

// <div className="App">
// <h2>Billin code challenge</h2>
// <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
// </div>