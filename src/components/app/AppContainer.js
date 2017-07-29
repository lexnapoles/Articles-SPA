import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';

class AppContainer extends Component {
  // lifecycle
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    return <App />;
  }
}

AppContainer.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
};

export default AppContainer;
