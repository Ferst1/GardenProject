import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonSection.module.css';

const ButtonSection = ({ text, color, backgroundColor, withLine }) => {
  const buttonClass = withLine ? `${s.button} ${s.withline}` : `${s.button} ${s.noline}`;

  return (
    <button className={buttonClass} style={{ backgroundColor }}>
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

ButtonSection.defaultProps = {
  withLine: true,
};

export default ButtonSection;
