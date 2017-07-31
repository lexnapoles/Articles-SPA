import React, { Component } from 'react';
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
  }

  shouldComponentUpdate({ tags }, newState) {
    const renderOnlyWithNewState = newState && !tags;

    return renderOnlyWithNewState;
  }

  onAdd(event) {
    event.preventDefault();

    this.addTag(this.state);
  }

  onDelete(event) {
    event.preventDefault();

    this.deleteLastTag();
  }

  onChange() {
    const { tags } = this.state;

    this.props.onChange(tags);
  }

  deleteLastTag() {
    const { tags } = this.state;

    this.setState({
      tags: tags.slice(0, tags.length - 1),
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

    this.setState({
      tags: [...tags, value],
      value: '',
    });
  }

  inputHandler(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return <TagsInput tags={[]} value="" onChange={this.inputHandler} />;
  }
}

TagsInputContainer
  .propTypes = {
  onChange: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagsInputContainer
  .defaultProps = {
  tags: [],
};

export default TagsInputContainer;
