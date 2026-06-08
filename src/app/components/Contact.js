'use client';
import ScrollReveal from './ScrollReveal';
import styles from './Contact.module.css';

const contactDetails = [
  {
    icon: '📍',
    label: 'Office Address',
    value: 'Plot No. 4-B, A.I.E., Industrial Area, Pedagantyada, Visakhapatnam – 530 044, Andhra Pradesh, India',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 98493 59486',
    href: 'tel:+919849359486',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'info@indoaristom.com',
    href: 'mailto:info@indoaristom.com',
  },
  {
    icon: '🌐',
    label: 'Website',
    value: 'www.indoaristom.com',
    href: 'https://indoaristom.com',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    value: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  },
];

const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3013!3d17.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c1856b4c8cfb!2sPedagantyada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530044!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/search/Plot+No.+4-B,+A.I.E.,+Industrial+Area,+Pedagantyada,+Visakhapatnam+530044';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Get In Touch
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Contact <span className="gold-text">Us</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              Reach out for bulk orders, pricing inquiries, or partnership opportunities
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.contactGrid}>
          <ScrollReveal direction="left" delay={0.2}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Indo Aristom</h3>
              <p className={styles.contactSubtitle}>
                Mechanical, Electrical Instrumentation, Engineering Maintenance,
                Contractors &amp; Order Suppliers
              </p>

              <div className={styles.contactItems}>
                {contactDetails.map((item) => (
                  <div key={item.label} className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={styles.contactLabel}>{item.label}</p>
                      <p className={styles.contactValue}>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.gstinBadge}>
                <div>
                  <p className={styles.gstinLabel}>GSTIN</p>
                  <p className={styles.gstinValue}>37ABJPT5510A1ZV</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.mapContainer}>
              <iframe
                src={GOOGLE_MAPS_EMBED}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indo Aristom Location - Pedagantyada, Visakhapatnam"
              />
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapOverlayLink}
              >
                <span className={styles.mapLinkText}>📍 Open in Google Maps</span>
                <span className={styles.mapLinkIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
