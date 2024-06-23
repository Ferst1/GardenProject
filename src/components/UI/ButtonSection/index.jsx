import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './ButtonSection.module.css';
import { useSelector } from 'react-redux';

const ButtonSection = ({ text, to, color, backgroundColor, className, onClick }) => {
  
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <NavLink 
      to={to || '#'} 
      className={({ isActive }) => `${s.button} ${isActive ? s.active : ''} ${darkMode ? s.dark : ''} ${className}`}
      style={{ color, backgroundColor }} 
      onClick={onClick}
      
    >
      {text}
    </NavLink>
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

