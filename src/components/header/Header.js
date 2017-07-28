import React from 'react';
import PropTypes from 'prop-types';
import './b-header.css';

const Header = ({ onAdd }) => {
  return (
    <header className="b-header" >
      <button className="b-header__add-article" onClick={onAdd} >Add Article</button >
    </header >
  );
};

Header.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Header;
