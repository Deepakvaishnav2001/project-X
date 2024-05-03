import { MouseEvent } from 'react';

const scrollToSection = (event: MouseEvent, sectionId: string, scrollContainerRef: React.RefObject<HTMLDivElement>) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  const navbar = document.getElementById('navbar');

  if (section && scrollContainerRef.current && navbar) {
    const sectionTop = section.offsetTop;
    const navbarHeight = navbar.offsetHeight;
    scrollContainerRef.current.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: 'smooth',
    });
  }
};

export default scrollToSection;
