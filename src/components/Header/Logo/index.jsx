

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSVG from '../../../media/images/logo.svg';
import s from './Logo.module.css';

const Logo = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={s.logo_container}>
      {imageError ? (
        <Link to="/main_page" className={s.logo_text}>
          <span>Logo</span>
        </Link>
      ) : (
        <Link to="/main_page">
          <img 
            className={s.logo}
            src={logoSVG} 
            alt="Logo" 
            onError={() => setImageError(true)} 
          />
        </Link>
      )}
    </div>
  );
}

export default Logo;
