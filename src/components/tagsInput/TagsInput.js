import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';

const TagsInput = ({ tags, value, onChange, onAdd, onDelete }) =>
  <div >
    <label >Tags</label >
    <div >
      {tags.map(tag => <div key={tag} >{tag}</div >)}
    </div >
    <Input value={value} placeholder="Article tags" onChange={onChange} />
    <button onClick={onAdd} >Add tag</button >
    <button onClick={onDelete} >Delete tag</button >
  </div >;


TagsInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default TagsInput;
