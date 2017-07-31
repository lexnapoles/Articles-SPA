import React from 'react';
import PropTypes from 'prop-types';
import './b-tags.css';

const Tags = ({ tags }) =>
  <div className="b-tags__container" >
    {tags.map(tag => <span key={tag} className="b-tags__item" >{tag}</span >)}
  </div >;

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
Tags.defaultProps = {};

export default Tags;