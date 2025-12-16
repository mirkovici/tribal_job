'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.blurred : ''}`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className={styles.container}>
     
        
        <nav className={styles.nav}>
                   <Link href="/">
        <Image
          src="/images/logo_tribal.png"
          alt="Tribal Jobs"
          width={52}
          height={52}
        />
      </Link>

          <Link href="/jobs">Jobs</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/news">News</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <div className={styles.language}>
            <span className={styles.active}>ENG</span>
            <span>/</span>
            <span>SRB</span>
          </div>
          <button className={styles.candidatesBtn}>Candidates</button>
          <button className={styles.employersBtn}>Employers</button>
        </div>
      </div>
    </header>
  );
}
