'use client';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop} />

      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerMain}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/logo.jpg"
                alt="Indo Aristom"
                width={45}
                height={45}
                className={styles.footerLogoImage}
              />
              <span className={styles.footerLogoText}>INDO ARISTOM</span>
            </div>
            <p className={styles.footerBrandDesc}>
              India&apos;s trusted supplier of premium imported coal, coke &amp;
              industrial minerals — powering industries with excellence since 1990.
            </p>
          </div>

          {/* Contact Info */}
          <div className={styles.footerContact}>
            <h4>Contact Info</h4>
            <div className={styles.footerContactItems}>
              <div className={styles.footerContactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>Plot No. 4-B, A.I.E., Industrial Area, Pedagantyada, Visakhapatnam – 530 044</p>
              </div>
              <div className={styles.footerContactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <p><a href="tel:+919849359486">+91 98493 59486</a></p>
              </div>
              <div className={styles.footerContactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <p><a href="mailto:info@indoaristom.com">info@indoaristom.com</a></p>
              </div>
              <div className={styles.footerContactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <p>GSTIN: 37ABJPT5510A1ZV</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2024 <span>Indo Aristom</span>. All Rights Reserved.
          </p>
          <p className={styles.footerCredits}>
            Powering India&apos;s Industrial Growth Since 1990
          </p>
        </div>
      </div>
    </footer>
  );
}
