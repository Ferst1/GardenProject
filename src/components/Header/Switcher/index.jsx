
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../../redux/themeSlice';
import switcherDarkSVG from '../../../media/icons/mode-night-icon.svg';
import switcherLightSVG from '../../../media/icons/mode-light-icon.svg';
import s from './Switcher.module.css';

const Switcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleModeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={s.switcher}>
      {isDarkMode ? (
        <img
          className={s.switcher}
          src={switcherDarkSVG}
          alt="Dark Mode Logo"
          onClick={handleModeToggle}
        />
      ) : (
        <img
          className={s.switcher}
          src={switcherLightSVG}
          alt="Light Mode Logo"
          onClick={handleModeToggle}
        />
      )}
    </div>
  );
};

export default Switcher;
