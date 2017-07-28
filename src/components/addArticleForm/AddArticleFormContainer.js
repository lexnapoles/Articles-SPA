import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddArticleForm from './AddArticleForm';

class AddArticleFormContainer extends Component {
  static validateInput(value) {
    if (!value.length) {
      return 'This field cannot be empty';
    }

    return '';
  }

  static validateTags(tags) {
    // Tags Format: tag1;tag2;tag3;
    const tagsFormat = /^([A-Za-z]+;)+$/ig;

    const invalidTagFormat = !tags.match(tagsFormat);

    return tags.length && invalidTagFormat ? 'tags does not match format' : '';
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

    return keys.some(error => error.length);
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
    const { validateArticle, errorsExist } = AddArticleFormContainer;

    const errors = validateArticle(article);

    if (errorsExist(errors)) {
      this.addErrors(errors);

      return;
    }

    this.props.onSubmit(article);
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
