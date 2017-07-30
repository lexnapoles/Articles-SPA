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
  }

  render() {
    return <TagsInput onChange={() => undefined} tags={[]} value="" />;
  }
}

TagsInputContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagsInputContainer.defaultProps = {
  tags: [],
};

export default TagsInputContainer;
