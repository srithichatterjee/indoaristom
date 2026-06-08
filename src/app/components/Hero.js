'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroGrain} />
      </div>

      <div className={styles.heroParticles}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.particle} />
        ))}
      </div>

      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/images/logo.jpg"
            alt="Indo Aristom Logo"
            width={100}
            height={100}
            className={styles.heroLogo}
            priority
          />
        </motion.div>

        <motion.p
          className={styles.heroLabel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Established 1990
        </motion.p>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          INDO ARISTOM
        </motion.h1>

        <motion.p
          className={styles.heroTagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Powering Industries Since 1990
        </motion.p>

        <motion.div
          className={styles.heroDivider}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />

        <motion.p
          className={styles.heroDesc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          India&apos;s trusted supplier of premium imported coal, coke, anthracite,
          refractory bricks &amp; industrial chemicals — serving steel, power &amp;
          manufacturing industries across the nation.
        </motion.p>

        <motion.div
          className={styles.heroStats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>
              <AnimatedCounter end={30} suffix="+" duration={2000} />
            </div>
            <div className={styles.heroStatLabel}>Years Experience</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>
              <AnimatedCounter end={10000} suffix="+" duration={2500} />
            </div>
            <div className={styles.heroStatLabel}>Tons Annually</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>
              <AnimatedCounter end={1000} duration={2200} />
            </div>
            <div className={styles.heroStatLabel}>Tons / Day Capacity</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>
              <AnimatedCounter end={5} suffix="+" duration={1500} />
            </div>
            <div className={styles.heroStatLabel}>Major Port Clients</div>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
