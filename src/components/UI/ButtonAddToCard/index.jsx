

import React from 'react';
import s from './ButtonAddToCard.module.css';

const ButtonAddToCard = ({ text, onClick, color, backgroundColor }) => {
  return (
    <button
      className={s.buttonAdd}
      style={{ color, backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonAddToCard;
