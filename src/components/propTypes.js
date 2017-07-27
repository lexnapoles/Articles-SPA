import PropTypes from 'prop-types';

const singleArticleOverviewPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
});

export const articleOverviewPropType = {
  article: singleArticleOverviewPropType,
  onClick: PropTypes.func.isRequired,
};

export const articlesListPropType = {
  articles: PropTypes.arrayOf(singleArticleOverviewPropType),
  onClick: PropTypes.func.isRequired,
};

export const singleArticlePropType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
});

export const articleContainerPropType = {
  article: singleArticlePropType,
  id: PropTypes.string.isRequired,
  loadArticle: PropTypes.func.isRequired,
};
