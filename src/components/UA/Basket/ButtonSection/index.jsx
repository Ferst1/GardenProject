import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonSection.module.css';

const ButtonSection = ({ text, color, backgroundColor }) => {
  return (
    <button className={s.button} style={{ backgroundColor }}>
      {text}
    </button>
  );
};

ButtonSection.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ButtonSection;

