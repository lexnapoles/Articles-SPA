import React from 'react';
import { inputPropType } from '../../propTypes';
import BaseInput from '../BaseInput';

const TextArea = ({
  styles,
  placeholder,
  value,
  onChange,
  error,
  title,
}) => {
  const hasError = error.length;

  return (
    <BaseInput title={title} styles={styles} error={error} >
      <textArea
        className={!hasError ? styles.className : styles.invalidClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </BaseInput >
  );
};

TextArea.propTypes = inputPropType;

TextArea.defaultProps = {
  styles: {
    invalidClassName: '',
  },
  error: '',
};

export default TextArea;
