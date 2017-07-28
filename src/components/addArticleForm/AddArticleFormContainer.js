import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddArticleForm from './AddArticleForm';
import { getExcerpt } from '../../../utils';

class AddArticleFormContainer extends Component {
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
    const { validateInput, validateTags } = AddArticleFormContainer;
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
    const excerpt = getExcerpt(article);
    const tags = article.tags.split(';');

    return {
      ...article,
      excerpt,
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

  onSubmit(event) {
    event.preventDefault();

    const { article } = this.state;
    const { validateArticle, errorsExist, getSubmittableArticle } = AddArticleFormContainer;

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
      <AddArticleForm
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


AddArticleFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddArticleFormContainer;
