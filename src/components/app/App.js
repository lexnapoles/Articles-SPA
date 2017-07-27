import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import ConnectedArticlesList from '../articlesList/ConnectedArticlesList';
import Article from '../article/Article';

const App = () =>
  <div className="app" >
    <header className="header" />
    <main className="content" >
      <BrowserRouter >
        <Switch >
          <Route exact path="/" component={ConnectedArticlesList} />
          <Route path="/:id" component={Article} />
        </Switch >
      </BrowserRouter >
    </main >
    <footer className="footer" />
  </div >;

export default App;

