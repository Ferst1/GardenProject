import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonSection.module.css';

const ButtonSection = ({ text, color, backgroundColor, withLine = true }) => {
  const buttonClass = withLine ? `${s.button} ${s.withline}` : `${s.button} ${s.noline}`;

  return (
    <button className={buttonClass} style={{ color, backgroundColor }}>
      {text}
    </button>
  );
};

ButtonSection.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  withLine: PropTypes.bool,
};

export default ButtonSection;
