import React, { Component } from 'react';
import { isEqual } from 'lodash/lang';
import UpdateArticleForm from './UpdateArticleForm';
import { updateFormPropType } from '../propTypes';

// TODO: Refactor forms into a single Form HOC

class UpdateArticleFormContainer extends Component {
  static validateInput(value) {
    if (!value.length) {
      return 'This field cannot be empty';
    }

    return '';
  }

  static validateArticle(article) {
    const { validateInput } = UpdateArticleFormContainer;
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
      article: this.props.article,
      errors: {
        author: '',
        content: '',
        tags: '',
        title: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { loadArticle, id } = this.props;

    loadArticle(id);
  }

  componentWillReceiveProps({ article }) {
    if (isEqual(article, this.props)) {
      return;
    }

    this.setState({
      article,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const { article } = this.state;
    const { validateArticle, errorsExist } = UpdateArticleFormContainer;

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

  handleTags(tags) {
    this.setState({
      article: {
        ...this.state.article,
        tags,
      },
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

  handleTagsChange(tags) {
    const { article: previousArticle } = this.state;

    this.setState({
      article: {
        ...previousArticle,
        tags,

      },
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

UpdateArticleFormContainer.defaultProps = {
  article: {
    author: '',
    content: '',
    tags: [''],
    title: '',
    published: false,
  },
};

export default UpdateArticleFormContainer;
