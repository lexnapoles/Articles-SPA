import React from 'react';
import { inputPropType } from '../../propTypes';
import BaseInput from '../BaseInput';

const Input = ({
  styles,
  title,
  placeholder,
  value,
  onChange,
  error,
  ...restOfAttributes
}) => {
  const hasError = error.length;

  return (
    <BaseInput title={title} styles={styles} error={error} >
      <input
        className={!hasError ? styles.className : styles.invalidClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restOfAttributes}
      />
    </BaseInput >
  );
};

Input.propTypes = inputPropType;

Input.defaultProps = {
  styles: {
    invalidClassName: '',
  },
  error: '',
};

export default Input;
