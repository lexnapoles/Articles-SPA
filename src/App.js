import React from 'react';
import { articlesPropType } from './propTypes';

const App = ({ articles }) =>
  <div >
    <header />
    <main >
      <pre >{JSON.stringify(articles, null, 2)}</pre >
    </main >
    <footer />
  </div >;

App.propTypes = {
  articles: articlesPropType,
};

export default App;
