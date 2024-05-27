import React from 'react';
import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = React.forwardRef(({ type = 'text', placeholder, ...props }, ref) => {
  return <input type={type} placeholder={placeholder} ref={ref} {...props} className={`${s.input} ${props.className}`} />;
});

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;

