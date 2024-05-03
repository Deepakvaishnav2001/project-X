import React from 'react';
import Image from 'next/image';
import Styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={`${Styles.footer} flex flex-col md:flex-row p-0 md:p-4`} style={{ backgroundColor: '#000' }}>
            <div className='footer-logo'>
                <div className={Styles.logoText}>
                    <h1 className={`cursor-pointer`}>OwnBrands</h1>
                </div>
            </div>
            <div>
                <ul className={Styles.FooterLinks}>
                    <li>
                        <a
                            className={`${Styles.FooterLink} cursor-pointer`}
                        >
                            Newsletter
                        </a>
                    </li>
                    <li>
                        <a
                            className={Styles.FooterLink}
                            href="https://dribbble.com/inputlogic"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src='images/dribble.svg' alt="Dribble" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            className={Styles.FooterLink}
                            href="https://twitter.com/inputlogic"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src='images/twitter.svg' alt="Twitter" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            className={Styles.FooterLink}
                            href="https://www.instagram.com/inputlife"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src='images/instagram.svg' alt="Instagram" width={24} height={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;