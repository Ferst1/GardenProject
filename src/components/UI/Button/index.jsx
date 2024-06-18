import React, { forwardRef } from 'react';
import s from './Button.module.css';

const Button = forwardRef((props, ref) => {
  const { text, color, className, ...otherProps } = props;

  return (
    <button {...otherProps} ref={ref} className={`${s.button_elem} ${className}`} style={{ color }}>
      {text}
    </button>
  );
});

export default Button;
