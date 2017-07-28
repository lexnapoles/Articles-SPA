import React, { Component } from 'react';
import { isEqual } from 'lodash/lang';
import { pick } from 'lodash/object';
import UpdateArticleForm from './UpdateArticleForm';
import { updateFormPropType } from '../propTypes';

// TODO: Refactor forms into a single Form HOC

const requiredFields = ['id', 'author', 'content', 'published', 'tags', 'title'];

class UpdateArticleFormContainer extends Component {
  static validateInput(value) {
    if (!value.length) {
      return 'This field cannot be empty';
    }

    return '';
  }

  static validateTags(tags) {
    // Tags Format: a super-co`ol tag 1;tag2;tag3 || tag1
    const tagsFormat = /^(([\S]+[^\s];)+)?((([ \S])+)[^\s;])$/ig;

    const invalidTagFormat = !tags.match(tagsFormat);

    return tags.length && invalidTagFormat ? 'Invalid tags format: tag1;tag2' : '';
  }

  static validateArticle(article) {
    const { validateInput, validateTags } = UpdateArticleFormContainer;
    const { author, title, content, tags } = article;

    return {
      author: validateInput(author),
      title: validateInput(title),
      content: validateInput(content),
      tags: validateTags(tags),
    };
  }

  static errorsExist(errors) {
    const keys = Object.keys(errors);

    return keys.some(key => errors[key].length);
  }

  static getSubmittableArticle(article) {
    const tags = article.tags.split(';');

    return {
      ...article,
      tags,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      article: {
        author: '',
        content: '',
        tags: '',
        title: '',
        published: false,
      },
      errors: {
        author: '',
        content: '',
        tags: '',
        title: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { loadArticle, id } = this.props;

    loadArticle(id, requiredFields);
  }

  componentWillReceiveProps({ article }) {
    const isNotAnEmptyArticle = Object.keys(article).length;
    const isNotTheSameArticle = !isEqual(this.state.article, article);

    if (isNotAnEmptyArticle && isNotTheSameArticle) {
      this.setState({
        article: {
          ...pick(article, requiredFields),
          tags: article.tags.join(';'),
        },
      });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const { article } = this.state;
    const { validateArticle, errorsExist, getSubmittableArticle } = UpdateArticleFormContainer;

    const errors = validateArticle(article);

    if (errorsExist(errors)) {
      this.addErrors(errors);

      return;
    }

    this.props.onSubmit(getSubmittableArticle(article));
  }

  addErrors(errors) {
    this.setState({
      errors,
    });
  }

  handleInputChange(field, event) {
    const article = {
      ...this.state.article,
      [field]: event.target.value,
    };

    this.setState({
      article,
    });
  }

  render() {
    return (
      <UpdateArticleForm
        article={this.state.article}
        errors={this.state.errors}
        onAuthorChange={event => this.handleInputChange('author', event)}
        onContentChange={event => this.handleInputChange('content', event)}
        onTitleChange={event => this.handleInputChange('title', event)}
        onTagsChange={event => this.handleInputChange('tags', event)}
        onSubmit={this.onSubmit}
      />);
  }
}

UpdateArticleFormContainer.propTypes = updateFormPropType;

export default UpdateArticleFormContainer;
