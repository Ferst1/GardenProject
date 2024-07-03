import React, { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`${styles.upbtn} ${isVisible ? styles.show : ''}`} onClick={scrollToTop}>
    </div>
  );
};

export default ScrollToTopButton;
