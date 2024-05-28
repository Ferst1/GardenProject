import React from 'react';
import MuiModal from '@mui/material/Modal';
import s from '../ModalWindow/ModalWindow.module.css';
import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';

const ModalWindow = ({ isOpen, handleClose, title, paragraph1, paragraph2, children }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: ({ children }) => <div className={s.backdrop}>{children}</div> }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <div className={s.modal}>
      <CloseIcon
          className={s.close}
          onClick={handleClose}
        />
        <h1 className={s.title}>{title}</h1>
        <p className={s.paragraph}>{paragraph1}</p>
        <p className={s.paragraph}>{paragraph2}</p>
        {children}
      </div>
    </MuiModal>
  );
};

export default ModalWindow;
