import React, { Component } from 'react';
import AddArticleForm from './AddArticleForm';

class AddArticleFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      content: '',
      tags: [''],
      title: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value, event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <AddArticleForm
        article={this.state}
        onAuthorChange={event => this.handleInputChange('author', event)}
        onContentChange={event => this.handleInputChange('content', event)}
        onTitleChange={event => this.handleInputChange('title', event)}
        onTagsChange={event => this.handleInputChange('tags', event)}
      />);
  }
}

AddArticleFormContainer.propTypes = {};
AddArticleFormContainer.defaultProps = {};

export default AddArticleFormContainer;
