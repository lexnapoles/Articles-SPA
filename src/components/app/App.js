import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import ConnectedArticlesList from '../articlesList/ConnectedArticlesList';
import ConnectedArticle from '../article/ConnectedArticle';
import ConnectedHeader from '../header/ConnectedHeader';
import ConnectedAddFormContainer from '../addArticleForm/ConnectedAddFormContainer';

const App = () =>
  <BrowserRouter >
    <div className="app" >
      <Switch >
        <Route exact path="/" component={ConnectedHeader} />
        <Route component={() => <header className="header" />} />
      </Switch >
      <main className="content" >
        <Switch >
          <Route exact path="/" component={ConnectedArticlesList} />
          <Route exact path="/add" component={ConnectedAddFormContainer} />
          <Route path="/:id" component={ConnectedArticle} />
        </Switch >
      </main >
      <footer className="footer" />
    </div >
  </BrowserRouter >;

export default App;

