import React, { useEffect, useState, useRef } from 'react';
import './typeWriter.css';

const Typewriter = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const typewriterRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const element = typewriterRef.current;
  
        if (element) {
          const elementY = element.offsetTop;
  
          if (scrollY + windowHeight > elementY) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [typewriterRef]);
  
    return (
      <div ref={typewriterRef} className={`typewriter ${isVisible ? 'active' : ''}`}>
        {children}
      </div>
    );
  };
export default Typewriter;