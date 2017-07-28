import React from 'react';
import { inputPropType } from '../propTypes';

const TextArea = ({
  className,
  inputWrapperClassName,
  invalidClassName,
  invalidLabelClassName,
  labelClassName,
  title,
  placeholder,
  value,
  onChange,
  error,
}) => {
  const hasError = error.length;

  return (
    <div className={inputWrapperClassName} >
      {title ? <label className={labelClassName} >{title}</label > : ''}
      <textArea
        className={!hasError ? className : `${className} ${invalidClassName}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {hasError ? <label className={`${labelClassName} ${invalidLabelClassName}`} >{error}</label > : ''}
    </div >
  );
};

TextArea.propTypes = inputPropType;

TextArea.defaultProps = {
  inputWrapperClassName: '',
  invalidClassName: '',
  isInvalid: false,
  placeholder: '',
  error: '',
  invalidLabelClassName: '',
  labelClassName: '',
};

export default TextArea;
