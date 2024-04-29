// useScrollToSection.tsx
import { MouseEvent } from 'react';

const scrollToSection = (event: MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section)
    section.scrollIntoView({ behavior: 'smooth' });
};

export default scrollToSection;
