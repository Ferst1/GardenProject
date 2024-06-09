import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './ButtonSection.module.css';

const ButtonSection = ({ text, to, color, backgroundColor }) => {
  return (
    <Link to={to} className={s.button} style={{ color, backgroundColor }}>
      {text}
    </Link>
  );
};

ButtonSection.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ButtonSection;
