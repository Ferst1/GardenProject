import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './ButtonSection.module.css';

const ButtonSection = ({ text, to, color, backgroundColor, className, onClick }) => {
  return (
    <Link to={to || '#'} className={`${s.button} ${className}`} style={{ color, backgroundColor }} onClick={onClick}>
      {text}
    </Link>
  );
};

ButtonSection.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonSection;
