import React from 'react';
import './app.css';
import { articlesPropType } from '../propTypes';
import ArticlesList from '../articlesList/ArticlesList';

const App = ({ articles }) =>
  <div className="app" >
    <header className="header" />
    <main className="content" >
      <ArticlesList articles={articles} />
    </main >
    <footer className="footer" />
  </div >;

App.propTypes = {
  articles: articlesPropType,
};

export default App;
