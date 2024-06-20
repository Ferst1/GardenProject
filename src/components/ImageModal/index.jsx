

import React from 'react';
import MuiModal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';

const ImageModal = ({ isOpen, handleClose, imageUrl }) => {
  if (!imageUrl) {
    return null;
  }

  const backdropStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    backgroundColor: 'rgba(40, 40, 40, 0.4)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    opacity: isOpen ? 1 : 0,
    transition: 'opacity 0.7s ease',
    zIndex: 1000, 
  };

  const modalStyle = {
    position: 'relative',
    margin: '180px auto 0', 
    padding: 0,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
    display: 'flex',
    justifyContent: 'center',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalImageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  };

  const closeIconStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
    stroke: 'var(--white)',
  };


  if (window.innerWidth <= 1440) {
    modalImageStyle.width = '900px';
    modalImageStyle.height = '610px';
  }
  if (window.innerWidth <= 999) {
    modalImageStyle.width = '728px';
    modalImageStyle.height = '494px';
  }
  if (window.innerWidth <= 767) {
    modalImageStyle.width = '440px';
    modalImageStyle.height = '298px';
  }
  if (window.innerWidth <= 479) {
    modalImageStyle.width = '320px';
    modalImageStyle.height = '216px';
  }

  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        style: backdropStyle,
      }}
    >
      <div style={modalStyle}>
        <CloseIcon
          style={closeIconStyle}
          onClick={handleClose}
        />
        <div style={imageContainerStyle}>
          <img src={imageUrl} alt="Product" style={modalImageStyle} />
        </div>
      </div>
    </MuiModal>
  );
};

export default ImageModal;
