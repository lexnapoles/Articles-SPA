import React from 'react';
import MdAddIcon from 'react-icons/lib/md/add';
import MdDeleteIcon from 'react-icons/lib/md/delete';
import Input from '../input/Input';
import { tagsInputPropTypes } from '../propTypes';
import BaseInput from '../inputs/BaseInput';

const TagsInput = ({
  title,
  error,
  styles,
  inputStyles,
  tags,
  value,
  onChange,
  onAdd,
  onDelete,
}) =>
  <BaseInput title={title} styles={styles} error={error} >
    <div className={styles.tagsContainerClassName} >
      {tags.map(tag => <div key={tag} className={styles.tagsClassName} >{tag}</div >)}
    </div >
    <div className={styles.inputWrapperClassName} >
      <Input value={value} placeholder="Article tags" onChange={onChange} {...inputStyles} />
      <MdAddIcon className={styles.buttonClassName} onClick={onAdd} />
      <MdDeleteIcon className={styles.buttonClassName} onClick={onDelete} />
    </div >
  </BaseInput >;

TagsInput.propTypes = tagsInputPropTypes;

TagsInput.defaultProps = {
  styles: {
    inputWrapperClassName: '',
    tagsContainerClassName: '',
    tagsClassName: '',
    buttonClassName: '',
  },
  error: '',
};

export default TagsInput;
