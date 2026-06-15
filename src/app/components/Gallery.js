'use client';
import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './Gallery.module.css';

const categories = [
  {
    id: 'products-godown',
    label: 'Products in Godown',
    description: 'Our premium coal, coke, and industrial products stored and ready for dispatch from our warehouse facility.',
    images: [
      '/images/product-1.png',
      '/images/product-2.png',
      '/images/product-3.png',
      '/images/product-4.jpg',
    ],
  },
  {
    id: 'employees',
    label: 'Our Skillful Employees',
    description: 'The dedicated and experienced team behind Indo Aristom\'s 30+ years of operational excellence.',
    images: [
      '/images/worker-1.png',
      '/images/worker-2.png',
      '/images/worker-3.png',
      '/images/worker-4.jpg',
    ],
  },
  {
    id: 'machinery-gallery',
    label: 'Our Machinery',
    description: 'State-of-the-art screening plants, crushers, loaders, and pulverizers in action at our facility.',
    images: [
      '/images/machinery-1.png',
      '/images/machinery-2.png',
      '/images/machinery-1.png',
      '/images/machinery-2.png',
    ],
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
              {activeCategory.images.map((image, index) => (
                <ScrollReveal key={`${activeCategory.id}-${index}`} delay={0.05 * index}>
                  <div className={styles.galleryItem}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={image}
                        alt={`${activeCategory.label} ${index + 1}`}
                        fill
                        className={styles.galleryImage}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
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
