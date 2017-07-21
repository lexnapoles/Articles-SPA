import React from 'react';
import { articlesPropType } from '../propTypes';
import ArticlesList from '../ArticlesList';

const App = ({ articles }) =>
  <div >
    <header />
    <main >
      <ArticlesList articles={articles} />
    </main >
    <footer />
  </div >;

App.propTypes = {
  articles: articlesPropType,
};

export default App;
