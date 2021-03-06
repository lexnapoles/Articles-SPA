import React, { Component } from 'react';
import { trim } from 'lodash/string';
import PropTypes from 'prop-types';
import TagsInput from './TagsInput';

class TagsInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onAdd(event) {
    event.preventDefault();

    this.addTag();
  }

  onDelete(event) {
    event.preventDefault();

    this.deleteLastTag();
  }

  onChange(tags) {
    this.props.onChange(tags);
  }

  onValueChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  resetInput() {
    this.setState({
      value: '',
    });
  }

  addTag() {
    const { value } = this.state;
    const { tags } = this.props;

    const newTag = trim(value);
    const isEmptyTag = !newTag.length;
    const tagAlreadyExists = tags.some(tag => tag === newTag);

    if (isEmptyTag || tagAlreadyExists) {
      return;
    }

    this.resetInput();

    const newTags = [...tags, newTag];
    this.onChange(newTags);
  }

  deleteLastTag() {
    const { tags } = this.props;

    const newTags = tags.slice(0, tags.length - 1);

    this.onChange(newTags);
  }

  render() {
    const { value } = this.state;
    const { tags, onChange, ...unrelatedProps } = this.props;

    return (
      <TagsInput
        tags={tags}
        value={value}
        onChange={this.onValueChange}
        onAdd={this.onAdd}
        onDelete={this.onDelete}
        {...unrelatedProps}
      />
    );
  }
}

TagsInputContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagsInputContainer.defaultProps = {
  tags: [],
};

export default TagsInputContainer;
