import React from 'react';
import MdHomeIcon from 'react-icons/lib/md/home';
import PropTypes from 'prop-types';

const ArticleHeader = ({ onHome }) =>
  <header className="b-header" >
    <MdHomeIcon size={23} onClick={onHome} />
  </header >;

ArticleHeader.propTypes = {
  onHome: PropTypes.func.isRequired,
};

export default ArticleHeader;
