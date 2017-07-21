import PropTypes from 'prop-types';

export const singleArticlePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
});

export const articlesPropType = PropTypes.arrayOf(singleArticlePropType);
