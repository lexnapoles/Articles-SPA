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

  static validateArticle(article) {
    const { validateInput } = AddArticleFormContainer;
    const { author, title, content } = article;

    return {
      author: validateInput(author),
      title: validateInput(title),
      content: validateInput(content),
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
        tags: [''],
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

  onSubmit() {
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

  handleInputChange(value, event) {
    this.setState({
      article: {
        [value]: event.target.value,
      },
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
