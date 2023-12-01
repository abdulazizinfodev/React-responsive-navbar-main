import React, { useEffect, useRef } from 'react';

function AnimatedValue() {
  const valueRef = useRef(null);

  useEffect(() => {
    const obj = valueRef.current;

    const handleScroll = () => {
      const { top, height } = obj.getBoundingClientRect();
      const isVisible = top < window.innerHeight && top + height >= 0;

      if (isVisible) {
        animateValue(obj, 0, 12, 2000);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const animationProgress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.textContent = Math.floor(animationProgress * (end - start) + start) + ' oy';

      if (animationProgress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  return (
    <div className='counterBox'>
      <div className='countetrUpNomber' id="value" ref={valueRef}></div>
      <p className='counterUpP'>Mentorlar yordami</p>
    </div>
  );
}

export default AnimatedValue;
