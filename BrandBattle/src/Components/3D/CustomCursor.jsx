import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;
      const ripple = rippleRef.current;

      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      ripple.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-ripple" ref={rippleRef}></div>
    </>
  );
};

export default CustomCursor;
