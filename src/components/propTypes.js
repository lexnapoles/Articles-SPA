import PropTypes from 'prop-types';

const singleArticleOverviewPropTypeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
});

export const articleOverviewPropType = {
  article: singleArticleOverviewPropTypeShape,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export const articlesListPropType = {
  articles: PropTypes.arrayOf(singleArticleOverviewPropTypeShape),
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export const articlePropTypeShape = PropTypes.shape({
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
});

export const articlePropType = {
  article: articlePropTypeShape,
  onUpdate: PropTypes.func.isRequired,
};

export const articleContainerPropType = {
  article: articlePropTypeShape,
  id: PropTypes.string.isRequired,
  loadArticle: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const formPropType = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export const formPropTypeShape = PropTypes.shape(formPropType);

export const errorFormPropTypeShape = PropTypes.shape({
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const articleFormPropType = {
  article: formPropTypeShape.isRequired,
  errors: errorFormPropTypeShape.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const updateArticlePropTypeShape = PropTypes.shape({
  ...formPropType,
  published: PropTypes.bool.isRequired,
});

export const updateFormPropType = {
  article: updateArticlePropTypeShape,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  loadArticle: PropTypes.func.isRequired,
};

export const inputPropType = {
  className: PropTypes.string,
  inputWrapperClassName: PropTypes.string,
  invalidClassName: PropTypes.string,
  invalidLabelClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

