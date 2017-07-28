import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import ConnectedArticlesList from '../articlesList/ConnectedArticlesList';
import ConnectedArticle from '../article/ConnectedArticle';
import Header from '../header/Header';

const App = () =>
  <div className="app" >
    <Header onAdd={() => undefined} />
    <main className="content" >
      <BrowserRouter >
        <Switch >
          <Route exact path="/" component={ConnectedArticlesList} />
          <Route path="/:id" component={ConnectedArticle} />
        </Switch >
      </BrowserRouter >
    </main >
    <footer className="footer" />
  </div >;

export default App;

