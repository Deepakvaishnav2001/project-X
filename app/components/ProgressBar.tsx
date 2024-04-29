import React, { useEffect, useCallback, useState } from 'react';
import { RefObject } from 'react';

interface NavbarProps {
  scrollContainerRef: RefObject<HTMLElement>;
}

const ProgressBar = ({ scrollContainerRef}: NavbarProps ) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const scrollTop = scrollContainerRef.current.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPosition(progress);
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [scrollContainerRef, handleScroll]);

  return (
    <div className="fixed left-0 w-full">
      <div
        className="absolute left-0 bg-blue-500 transition-all duration-300"
        style={{ width: `${scrollPosition}%`, height: '2px' }} // Adjust width here
      />
    </div>
  );
};

export default ProgressBar;
