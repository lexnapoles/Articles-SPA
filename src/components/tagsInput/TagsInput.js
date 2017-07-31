import React from 'react';
import MdAddIcon from 'react-icons/lib/md/add';
import MdDeleteIcon from 'react-icons/lib/md/delete';
import Input from '../input/Input';
import { tagsInputPropTypes } from '../propTypes';

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
}) => {
  const hasError = error.length;

  return (
    <div className={!hasError ? styles.className : styles.invalidClassName} >
      <label className={styles.labelClassName} >{title}</label >
      <div className={styles.tagsContainerClassName} >
        {tags.map(tag => <div key={tag} className={styles.tagsClassName} >{tag}</div >)}
      </div >
      <div className={styles.inputWrapperClassName} >
        <Input value={value} placeholder="Article tags" onChange={onChange} {...inputStyles} />
        <MdAddIcon className={styles.buttonClassName} onClick={onAdd} />
        <MdDeleteIcon className={styles.buttonClassName} onClick={onDelete} />
      </div >
      {hasError ? <label className={styles.invalidLabelClassName} >{error}</label > : ''}
    </div >
  );
};

TagsInput.propTypes = tagsInputPropTypes;

TagsInput.defaultProps = {
  styles: {
    inputWrapperClassName: '',
    invalidClassName: '',
    invalidLabelClassName: '',
    labelClassName: '',
  },
  error: '',
};

export default TagsInput;
