"use client"
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import scrollToSectionhook from '../hooks/useScrollToSection';
import { RefObject } from 'react';

interface NavbarProps {
  scrollContainerRef: RefObject<HTMLElement>;
}

const Navbar = ({ scrollContainerRef }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (event: React.MouseEvent, sectionId: string) => {
    scrollToSectionhook(event,sectionId)
    setActiveLink(sectionId);
  };

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const sections = scrollContainerRef.current.querySelectorAll('section');
      const scrollPosition = scrollContainerRef.current.scrollTop;
  
      sections.forEach((section: { offsetTop: any; offsetHeight: any; id: string; }) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(section.id);
        }
      });
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
    <nav className={`${styles.navbar} flex flex-col md:flex-row`} >
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
            <h1 className='cursor-pointer' onClick={(e) => scrollToSection(e, 'home')}>OwnBrands</h1>
        </div>
      </div>
      <div>
        <ul className={styles.navLinks}>
          <li>
            <a
              className={`${styles.navLink} cursor-pointer ${activeLink === 'home' ? styles.active : ''}`}
              onClick={(event) => scrollToSection(event, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`${styles.navLink} cursor-pointer ${activeLink === 'services' ? styles.active : ''}`}
              onClick={(event) => scrollToSection(event, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`${styles.navLink} cursor-pointer ${activeLink === 'about' ? styles.active : ''}`}
              onClick={(event) => scrollToSection(event, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`${styles.navLink} cursor-pointer ${activeLink === 'contact' ? styles.active : ''}`}
              onClick={(event) => scrollToSection(event, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
