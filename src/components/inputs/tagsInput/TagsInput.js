import React from 'react';
import MdAddIcon from 'react-icons/lib/md/add';
import MdDeleteIcon from 'react-icons/lib/md/delete';
import Input from '../input/Input';
import { tagsInputPropTypes } from '../../propTypes';
import BaseInput from '../BaseInput';
import Tags from '../../tags/Tags';

const MAX_TAG_LENGTH = 50;

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
    <Tags tags={tags} />
    <div className={styles.inputWrapperClassName} >
      <Input
        value={value}
        placeholder="Article tags"
        onChange={onChange}
        maxLength={MAX_TAG_LENGTH}
        {...inputStyles}
      />
      <MdAddIcon className={styles.buttonClassName} onClick={onAdd} />
      <MdDeleteIcon className={styles.buttonClassName} onClick={onDelete} />
    </div >
  </BaseInput >;

TagsInput.propTypes = tagsInputPropTypes;

TagsInput.defaultProps = {
  styles: {
    inputWrapperClassName: '',
    buttonClassName: '',
  },
  error: '',
};

export default TagsInput;
