import React from 'react';
import PropTypes from 'prop-types';

const HomeHeader = ({ onAdd }) =>
  <header className="b-header" >
    <button className="b-header__add-article" onClick={onAdd} >Add Article</button >
  </header >;


HomeHeader.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default HomeHeader;
