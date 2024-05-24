import React, { useState } from 'react'
import logoSVG from '../../../media/images/logo.svg';
import s from './Logo.module.css';

const Logo = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={s.logo_container}>
      {imageError ? (
        <span>Logo</span>
      ) : (
        <img src={logoSVG} alt="Logo" onError={() => setImageError(true)} />
      )}
    </div>
  );
}

export default Logo