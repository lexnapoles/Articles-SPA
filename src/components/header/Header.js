import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectedHomeHeader from './homeHeader/ConnectedHomeHeader';
import './b-header.css';

const Header = () =>
  <Switch >
    <Route exact path="/" component={ConnectedHomeHeader} />
    <Route component={() => <header className="b-header" />} />
  </Switch >;

export default Header;
