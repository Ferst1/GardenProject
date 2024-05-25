import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonSection.module.css';

const ButtonSection = ({ text, color }) => {
  return (
    <button className={s.button} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

ButtonSection.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonSection;
