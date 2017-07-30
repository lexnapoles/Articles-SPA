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

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
    });
  }

  onAdd() {
    const tag = this.state.value;
    const previousTags = this.state.tags;

    this.setState({
      tags: [...previousTags, tag],
    });
  }

  render() {
    return <TagsInput tags={[]} value="" onChange={this.onChange} />;
  }
}

TagsInputContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagsInputContainer.defaultProps = {
  tags: [],
};

export default TagsInputContainer;
