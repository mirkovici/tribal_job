import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
                               <Image src="/images/logo_tribal.png" alt="Tribal Jobs" width={55} height={55} />
           
            <span className={styles.logoText}>TRIBAL <span className={styles.jobsText}>JOBS</span></span>
          </div>
          <p className={styles.description}>
            The premier job platform connecting top gaming talent with leading studios worldwide. Join our community of passionate professionals shaping the future of interactive entertainment.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Discord">
             <img src="/images/insta.svg" alt="Insta"/>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Linkedin">
                          <img src="/images/linkedin.svg" alt="Insta"/>

            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
                          <img src="/images/twitter.svg" alt="Insta"  />

            </a>
          
          </div>
          <div className={styles.contact}>
            <p className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@tribal-jobs.com
            </p>
            <p className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +381 64 129 8597
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
       

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Home</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Jobs</a></li>
              <li><a href="#" className={styles.link}>Companies</a></li>
                            <li><a href="#" className={styles.link}>News</a></li>
              <li><a href="#" className={styles.link}>Pricing</a></li>
              <li><a href="#" className={styles.link}>About us</a></li>
              <li><a href="#" className={styles.link}>Contact</a></li>

            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>© 2025 Tribal Jobs. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}>Privacy Policy</a>
          <a href="#" className={styles.bottomLink}>Terms of Service</a>
          <a href="#" className={styles.bottomLink}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
