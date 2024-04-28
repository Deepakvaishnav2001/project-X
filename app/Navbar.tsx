"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section)
      section.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>OwnBrands</h1>
          </Link>
        </div>
      </div>
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
            className={`${styles.navLink} cursor-pointer ${activeLink === 'about' ? styles.active : ''}`}
            onClick={(event) => scrollToSection(event, 'about')}
          >
            About
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
            className={`${styles.navLink} cursor-pointer ${activeLink === 'contact' ? styles.active : ''}`}
            onClick={(event) => scrollToSection(event, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
