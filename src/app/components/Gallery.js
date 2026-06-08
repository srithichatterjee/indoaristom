'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './Gallery.module.css';

const categories = [
  {
    id: 'products-godown',
    label: 'Products in Godown',
    description: 'Our premium coal, coke, and industrial products stored and ready for dispatch from our warehouse facility.',
    placeholderCount: 4,
    placeholderLabel: 'Product Image',
  },
  {
    id: 'employees',
    label: 'Our Skillful Employees',
    description: 'The dedicated and experienced team behind Indo Aristom\'s 30+ years of operational excellence.',
    placeholderCount: 4,
    placeholderLabel: 'Team Photo',
  },
  {
    id: 'machinery-gallery',
    label: 'Our Machinery',
    description: 'State-of-the-art screening plants, crushers, loaders, and pulverizers in action at our facility.',
    placeholderCount: 4,
    placeholderLabel: 'Machinery Photo',
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('products-godown');
  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Live Gallery
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              A Glimpse Into Our <span className="gold-text">Operations</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              Explore our facilities, team, and products through our live gallery
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={activeTab === cat.id ? styles.tabActive : styles.tab}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {activeCategory && (
          <>
            <ScrollReveal key={activeCategory.id}>
              <div className={styles.categoryInfo}>
                <p className={styles.categoryInfoText}>
                  <strong>{activeCategory.label}</strong> — {activeCategory.description}
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.galleryGrid}>
              {Array.from({ length: activeCategory.placeholderCount }).map((_, index) => (
                <ScrollReveal key={`${activeCategory.id}-${index}`} delay={0.05 * index}>
                  <div className={styles.galleryItem}>
                    <div className={styles.placeholderContent}>
                      <div className={styles.placeholderIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <span className={styles.placeholderText}>
                        {activeCategory.placeholderLabel} {index + 1}
                      </span>
                      <span className={styles.placeholderHint}>
                        Upload image to fill this slot
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
