'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import styles from './Machinery.module.css';

const machines = [
  {
    name: 'Screening Plant',
    image: '/images/screening-plant.png',
    description: 'High-capacity vibrating screening plant for precise coal and coke grading by particle size.',
  },
  {
    name: 'Crusher',
    image: '/images/crusher.png',
    description: 'Industrial jaw crusher for efficient size reduction of coal and coke to required specifications.',
  },
  {
    name: 'JCB Loader',
    image: '/images/jcb-loader.png',
    description: 'Heavy-duty front loaders for rapid material handling and loading operations in the yard.',
  },
  {
    name: 'Pulverizer',
    image: '/images/pulverizer.png',
    description: 'Precision grinding equipment for producing fine-grade coal and coke powders to exact specifications.',
  },
];

const CapacityIconMachines = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const CapacityIconTons = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

export default function Machinery() {
  return (
    <section id="machinery" className={styles.machinery}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Our Machinery
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Industrial-Grade <span className="gold-text">Machinery</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              State-of-the-art equipment powering our 1,000 tons/day operational capacity
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.machineGrid}>
          {machines.map((machine, index) => (
            <ScrollReveal key={machine.name} delay={0.1 * index}>
              <div className={styles.machineCard}>
                <div className={styles.machineImageWrap}>
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className={styles.machineImage}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className={styles.machineImageOverlay} />
                </div>
                <div className={styles.machineBody}>
                  <span className={styles.machineNumber}>Machine 0{index + 1}</span>
                  <h3 className={styles.machineName}>{machine.name}</h3>
                  <p className={styles.machineDesc}>{machine.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.capacitySection}>
          <ScrollReveal delay={0.1}>
            <div className={styles.capacityStat}>
              <div className={styles.capacityIconWrap}>
                <CapacityIconMachines />
              </div>
              <div className={styles.capacityNumber}>
                <AnimatedCounter end={10} duration={1500} />
              </div>
              <p className={styles.capacityLabel}>High-Performance Machines</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.capacityStat}>
              <div className={styles.capacityIconWrap}>
                <CapacityIconTons />
              </div>
              <div className={styles.capacityNumber}>
                <AnimatedCounter end={1000} suffix=" Tons" duration={2000} />
              </div>
              <p className={styles.capacityLabel}>Daily Operational Capacity</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
