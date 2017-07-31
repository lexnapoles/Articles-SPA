import React, { Component } from 'react';
import { isEqual } from 'lodash/lang';
import PropTypes from 'prop-types';
import TagsInput from './TagsInput';

class TagsInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: props.tags,
      value: '',
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillReceiveProps({ tags }) {
    if (isEqual(tags, this.state.tags)) {
      return;
    }

    this.setState({
      tags,
    });
  }

  onAdd(event) {
    event.preventDefault();

    this.addTag(this.state);
  }

  onDelete(event) {
    event.preventDefault();

    this.deleteLastTag();
  }

  onChange(tags) {
    this.props.onChange(tags);
  }

  deleteLastTag() {
    const { tags } = this.state;

    const newTags = tags.slice(0, tags.length - 1);

    this.onChange(newTags);

    this.setState({
      tags: newTags,
    });
  }

  addTag() {
    const { tags, value } = this.state;
    const tagExists = tags.some(tag => tag === value);

    if (tagExists) {
      this.setState({
        value: '',
      });

      return;
    }

    const newTags = [...tags, value];

    this.onChange(newTags);

    this.setState({
      tags: newTags,
      value: '',
    });
  }

  inputHandler(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { tags, value } = this.state;

    return (
      <TagsInput
        tags={tags}
        value={value}
        onChange={this.inputHandler}
        onAdd={this.onAdd}
        onDelete={this.onDelete}
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
