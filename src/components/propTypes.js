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
  onDelete: PropTypes.func.isRequired,
};

export const articlesListPropType = {
  articles: PropTypes.arrayOf(singleArticleOverviewPropType),
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
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

export const formPropType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
});

export const errorFormPropType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const addArticleFormPropType = {
  article: formPropType.isRequired,
  errors: errorFormPropType.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
