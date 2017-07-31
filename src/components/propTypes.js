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

export const inputStylesPropType = {
  className: PropTypes.string,
  invalidClassName: PropTypes.string,
};

export const inputPropType = {
  title: PropTypes.string,
  styles: PropTypes.shape(inputStylesPropType),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

const TagsInputStyles = {
  ...inputStylesPropType,
  buttonClassName: PropTypes.string,
  tagsClassName: PropTypes.string,
  tagsContainerClassName: PropTypes.string,
};

export const tagsInputPropTypes = {
  error: PropTypes.string,
  inputStyles: PropTypes.shape(inputStylesPropType),
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  styles: PropTypes.shape(TagsInputStyles),
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
};

const baseInputStylesPropTypes = {
  wrapperClassName: PropTypes.string,
  invalidWrapperClassName: PropTypes.string,
  invalidLabelClassName: PropTypes.string,
  labelClassName: PropTypes.string,
};

export const baseInputPropTypes = {
  title: PropTypes.string,
  styles: PropTypes.shape(baseInputStylesPropTypes),
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};
