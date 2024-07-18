import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import arrowup from './ArrowUp.svg'

const ScrollToTopButton = () => {
  const btnRef = useRef(null);
  const location = useLocation();
  const path = location.pathname;
  const [showArrow, setShowArrow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setShowArrow(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setIsScrolling(false);
        setShowArrow(false);
      }, 800);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      ref={btnRef}
      onClick={handleScrollToTop}
      style={{
        position: 'fixed',
        bottom: '130px',
        right: '35px',
        zIndex: '999',
        transition: 'opacity 0.9s ease-in-out',
        opacity: showArrow ? 1 : 0,
      }}
      className="animate-bounce"
    >
      <img
        src={arrowup}
        alt="ArrowUp"
        className="w-10 h-10"
      />
    </button>
  );
};

export default ScrollToTopButton;
