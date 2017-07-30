import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';

const TagsInput = ({ tags, value, onChange }) =>
  <div >
    <label >Tags</label >
    <div >
      {tags}
    </div >
    <Input value={value} placeholder="Article tags" onChange={onChange} />
    <button >Add tag</button >
  </div >;


TagsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default TagsInput;
