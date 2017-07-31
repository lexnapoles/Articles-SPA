import React from 'react';
import PropTypes from 'prop-types';
import MdAddIcon from 'react-icons/lib/md/add';
import MdDeleteIcon from 'react-icons/lib/md/delete';
import Input from '../input/Input';

const TagsInput = ({
  className,
  labelClassName,
  tagsContainerClassName,
  tagsClassName,
  inputWrapperClassName,
  buttonClassName,
  tags,
  value,
  onChange,
  onAdd,
  onDelete,
  ...inputProps
}) =>
  <div className={className} >
    <label className={labelClassName} >Tags</label >
    <div className={tagsContainerClassName} >
      {tags.map(tag => <div key={tag} className={tagsClassName} >{tag}</div >)}
    </div >
    <div className={inputWrapperClassName} >
      <Input value={value} placeholder="Article tags" onChange={onChange} {...inputProps} />
      <MdAddIcon className={buttonClassName} onClick={onAdd} />
      <MdDeleteIcon className={buttonClassName} onClick={onDelete} />
    </div >
  </div >;

TagsInput.propTypes = {
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  inputWrapperClassName: PropTypes.string,
  invalidClassName: PropTypes.string,
  invalidLabelClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagsClassName: PropTypes.string,
  tagsContainerClassName: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string,
};

export default TagsInput;
