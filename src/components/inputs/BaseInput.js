import React from 'react';
import { baseInputPropTypes } from '../propTypes';

const defaultStyle = {
  wrapperClassName: '',
  invalidWrapperClassName: '',
  invalidLabelClassName: '',
  labelClassName: '',
};

const getStyles = styles => ({
  ...defaultStyle,
  ...styles,
});

const BaseInput = ({
  styles,
  title,
  error,
  children,
}) => {
  const hasError = error.length;

  const {
    wrapperClassName,
    invalidWrapperClassName,
    labelClassName,
    invalidLabelClassName,
  } = getStyles(styles);

  return (
    <div className={!hasError ? wrapperClassName : invalidWrapperClassName} >
      {title ? <label className={labelClassName} >{title}</label > : ''}
      {children}
      {hasError ? <label className={invalidLabelClassName} >{error}</label > : ''}
    </div >
  );
};

BaseInput.defaultProps = {
  error: '',
};

BaseInput.propTypes = baseInputPropTypes;

export default BaseInput;
