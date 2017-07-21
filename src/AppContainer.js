import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import App from './App';

class AppContainer extends Component {
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
      .then(AppContainer.getArticles)
      .then(articles => this.setState({ articles }));
  }

  render() {
    return <App articles={this.state.articles} />;
  }
}

export default AppContainer;
