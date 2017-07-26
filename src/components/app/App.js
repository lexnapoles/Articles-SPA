import React from 'react';
import './app.css';
import ConnectedArticlesList from '../articlesList/ConnectedArticlesList';

const App = () =>
  <div className="app" >
    <header className="header" />
    <main className="content" >
      <ConnectedArticlesList />
    </main >
    <footer className="footer" />
  </div >;

export default App;

