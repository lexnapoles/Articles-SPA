import React, { Component } from 'react';
import App from './App';
import fetchArticles from '../api/fetchArticles';

class AppContainer extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    fetchArticles()
      .then(articles => this.setState({ articles }));
  }

  render() {
    return <App articles={this.state.articles} />;
  }
}

export default AppContainer;
