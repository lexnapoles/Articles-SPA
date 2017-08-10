import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectedHomeHeader from './homeHeader/ConnectedHomeHeader';
import ConnectedArticleHeader from './articleHeader/ConnectedArticleHeader';
import './b-header.css';

const EmptyHeader = () => <header className="b-header" />;

const Header = () =>
  <Switch >
    <Route exact path="/" component={ConnectedHomeHeader} />
    <Route path="/add" component={EmptyHeader} />
    <Route path="/update" component={EmptyHeader} />
    <Route path="/:id" component={ConnectedArticleHeader} />
  </Switch >;

export default Header;
