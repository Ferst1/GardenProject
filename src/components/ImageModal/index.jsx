
import React, { useState } from 'react';
import MuiModal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';

const ImageModal = ({ isOpen, handleClose, imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!imageUrl) {
    return null;
  }

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsZoomed(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
    zIndex: 1010, 
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1020, 
  };

  const modalImageStyle = {
    maxWidth: isZoomed ? 'none' : '100%',
    maxHeight: isZoomed ? 'none' : '100%',
    objectFit: 'contain',
    transform: isZoomed ? `scale(2) translate(${position.x}px, ${position.y}px)` : 'none',
    cursor: isZoomed ? 'move' : 'default',
    transition: 'transform 0.3s ease',
  };

  const closeIconStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
    stroke: 'var(--white)',
    zIndex: 1030, 
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
        <div
          style={imageContainerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <img src={imageUrl} alt="Product" style={modalImageStyle} />
        </div>
      </div>
    </MuiModal>
  );
};

export default ImageModal;
