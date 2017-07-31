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
      tags: '',
    };
  }

  static errorsExist(errors) {
    const keys = Object.keys(errors);

    return keys.some(key => errors[key].length);
  }

  constructor(props) {
    super(props);

    this.state = {
      article: {
        author: '',
        content: '',
        tags: [],
        title: '',
      },
      errors: {
        author: '',
        content: '',
        tags: '',
        title: '',
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
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

  onInputChange(field, event) {
    const article = {
      ...this.state.article,
      [field]: event.target.value,
    };

    this.setState({
      article,
    });
  }

  onTagsChange(tags) {
    const { article: previousArticle } = this.state;

    this.setState({
      article: {
        ...previousArticle,
        tags,

      },
    });
  }

  addErrors(errors) {
    this.setState({
      errors,
    });
  }

  render() {
    return (
      <AddArticleForm
        article={this.state.article}
        errors={this.state.errors}
        onAuthorChange={event => this.onInputChange('author', event)}
        onContentChange={event => this.onInputChange('content', event)}
        onTitleChange={event => this.onInputChange('title', event)}
        onTagsChange={this.onTagsChange}
        onSubmit={this.onSubmit}
      />);
  }
}


AddArticleFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddArticleFormContainer;
