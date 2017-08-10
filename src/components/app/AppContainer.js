import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../constants/history';
import App from './App';

class AppContainer extends Component {
  // lifecycle
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    return <App history={history} />;
  }
}

AppContainer.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
};

export default AppContainer;
