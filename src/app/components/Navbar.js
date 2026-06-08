'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Machinery', href: '#machinery' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.logoArea} onClick={(e) => handleClick(e, '#hero')}>
          <Image
            src="/images/logo.jpg"
            alt="Indo Aristom Logo"
            width={50}
            height={50}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>INDO ARISTOM</span>
            <span className={styles.logoSubtitle}>Since 1990</span>
          </div>
        </a>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${activeSection === item.href.replace('#', '') ? styles.navLinkActive : ''}`}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.navCta}
            onClick={(e) => handleClick(e, '#contact')}
          >
            Contact Us
          </a>
        </div>

        <div
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileCta}
          onClick={(e) => handleClick(e, '#contact')}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
