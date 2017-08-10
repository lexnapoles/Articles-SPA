import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import ConnectedArticlesList from '../articlesList/ConnectedArticlesList';
import ConnectedArticle from '../article/ConnectedArticle';
import ConnectedHeader from '../header/ConnectedHeader';
import ConnectedAddFormContainer from '../forms/addArticleForm/ConnectedAddFormContainer';
import ConnectedUpdateFormContainer from '../forms/updateArticleForm/ConnectedUpdateFormContainer';

const App = ({ history }) =>
  <ConnectedRouter history={history} >
    <div className="app" >
      <Switch >
        <Route exact path="/" component={ConnectedHeader} />
        <Route component={() => <header className="header" />} />
      </Switch >
      <main className="content" >
        <Switch >
          <Route exact path="/" component={ConnectedArticlesList} />
          <Route exact path="/add" component={ConnectedAddFormContainer} />
          <Route exact path="/update/:id" component={ConnectedUpdateFormContainer} />
          <Route path="/:id" component={ConnectedArticle} />
        </Switch >
      </main >
      <footer className="footer" />
    </div >
  </ConnectedRouter >;

App.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default App;

