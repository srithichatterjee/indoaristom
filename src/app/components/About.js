'use client';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import styles from './About.module.css';

const stats = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    value: 1990,
    label: 'Year Established',
    suffix: '',
    isYear: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    value: 30,
    label: 'Years of Experience',
    suffix: '+',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
    value: 10000,
    label: 'Tons Annual Supply',
    suffix: '+',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    value: 10,
    label: 'Heavy Machines',
    suffix: '',
  },
];

const clients = [
  'RINL',
  'Haldia Port',
  'Visakhapatnam Port',
  'Gangavaram Port',
  'Krishnapatnam Port',
];

const regions = ['Bangalore', 'Odisha', 'Chennai', 'Delhi', 'Raipur', 'Raigada', 'Uttar Pradesh'];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">About The Founder</span>
        </ScrollReveal>

        <div className={styles.aboutGrid}>
          <ScrollReveal direction="left" delay={0.2}>
            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                <div
                  className={styles.photo}
                  style={{
                    background: 'linear-gradient(135deg, #292524 0%, #44403C 50%, #292524 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="40" r="24" fill="rgba(184,134,11,0.3)" />
                    <ellipse cx="60" cy="100" rx="38" ry="28" fill="rgba(184,134,11,0.2)" />
                  </svg>
                </div>
              </div>
              <div className={styles.photoDecor} />
              <div className={styles.photoExp}>
                <div className={styles.photoExpNumber}>
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <div className={styles.photoExpLabel}>Years Exp</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.aboutContent}>
              <h2 className={styles.ownerName}>Tapan Kumar Chatterjee</h2>
              <p className={styles.ownerRole}>PROPRIETOR</p>

              <div className="gold-divider" />

              <p className={styles.aboutDesc}>
                With 30+ years in the coal &amp; coke industry, Mr. Tapan Kumar Chatterjee
                has established Indo Aristom as a trusted name for premium imported coal
                and industrial minerals across India — partnering with major ports and
                steel manufacturers since 1990.
              </p>

              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <ScrollReveal key={stat.label} delay={0.1 * index} direction="up">
                    <div className={styles.statCard}>
                      <div className={styles.statIcon}>{stat.icon}</div>
                      <div className={styles.statInfo}>
                        <h4>
                          {stat.isYear ? (
                            stat.value
                          ) : (
                            <AnimatedCounter
                              end={stat.value}
                              suffix={stat.suffix}
                              duration={2000}
                            />
                          )}
                        </h4>
                        <p>{stat.label}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className={styles.clientsSection}>
                <p className={styles.clientsLabel}>Prestigious Clients</p>
                <div className={styles.clientsBadges}>
                  {clients.map((client, index) => (
                    <ScrollReveal key={client} delay={0.05 * index} direction="up">
                      <div className={styles.clientBadge}>
                        <div className={styles.clientBadgeIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <span>{client}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <div className={styles.regionsSection}>
                <p className={styles.regionsLabel}>Pan-India Operations</p>
                <div className={styles.regionsBadges}>
                  {regions.map((region) => (
                    <span key={region} className={styles.regionBadge}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
