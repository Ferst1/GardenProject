import React from 'react';
import switcherDarkSVG from '../../../media/icons/mode-night-icon.svg';
import switcherLightSVG from '../../../media/icons/mode-light-icon.svg';

const Switcher = ({ isDarkMode, setIsDarkMode }) => {
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      {isDarkMode ? (
        <img src={switcherDarkSVG} alt="Dark Mode Logo" onClick={handleModeToggle} />
      ) : (
        <img src={switcherLightSVG} alt="Light Mode Logo" onClick={handleModeToggle} />
      )}
    </div>
  );
};

export default Switcher;
