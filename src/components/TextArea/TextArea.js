import React from 'react';
import { inputPropType } from '../propTypes';

const TextArea = ({
  styles,
  title,
  placeholder,
  value,
  onChange,
  error,
}) => {
  const hasError = error.length;

  return (
    <div className={styles.inputWrapperClassName} >
      {title ? <label className={styles.labelClassName} >{title}</label > : ''}
      <textArea
        className={!hasError ? styles.className : styles.invalidClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {hasError ? <label className={styles.invalidLabelClassName} >{error}</label > : ''}
    </div >
  );
};

TextArea.propTypes = inputPropType;

TextArea.defaultProps = {
  styles: {
    inputWrapperClassName: '',
    invalidClassName: '',
    invalidLabelClassName: '',
    labelClassName: '',
  },
  error: '',
};

export default TextArea;
