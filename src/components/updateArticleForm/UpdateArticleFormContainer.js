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

    this.onInputChange = this.onInputChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
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
      <UpdateArticleForm
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

UpdateArticleFormContainer.propTypes = updateFormPropType;

UpdateArticleFormContainer.defaultProps = {
  article: {
    author: '',
    content: '',
    tags: [],
    title: '',
    published: false,
  },
};

export default UpdateArticleFormContainer;
