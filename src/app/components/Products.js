'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './Products.module.css';

const products = [
  {
    name: 'Anthracite Coal',
    image: '/images/anthracite.png',
    badge: 'Premium',
    description: 'High-grade imported anthracite coal with superior carbon content, ideal for industrial furnaces and water filtration systems.',
    sizes: ['0–1 mm', '1–5 mm', '5–16 mm', '10–30 mm'],
    features: ['High Carbon', 'Low Ash', 'Imported Quality'],
  },
  {
    name: 'Coke Fines',
    image: '/images/coke-fines.png',
    badge: 'Industrial',
    description: 'Premium quality coke fines sourced from top-grade metallurgical coke, essential for steel and sponge iron manufacturing.',
    sizes: ['6–10 mm', '10–20 mm', '10–30 mm'],
    features: ['Metallurgical Grade', 'Consistent Quality', 'Bulk Supply'],
  },
  {
    name: 'Water Filter Media',
    image: '/images/water-filter-media.png',
    badge: 'Filtration',
    description: 'Specially processed anthracite-based water filter media for municipal and industrial water treatment plants.',
    sizes: ['Standard Grades'],
    features: ['High Purity', 'Uniform Granules', 'Long Lasting'],
  },
  {
    name: 'Industrial Chemicals',
    image: '/images/industrial-chemicals.png',
    badge: 'Chemical',
    description: 'A comprehensive range of industrial chemicals for steel manufacturing, water treatment, and power generation applications.',
    sizes: ['Various Grades'],
    features: ['Certified Quality', 'Safe Handling', 'Bulk Available'],
  },
];

const applications = [
  {
    name: 'Steel Industry',
    desc: 'Primary fuel & reducing agent',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/><path d="M9 12h6"/><path d="M12 8v4"/></svg>
    ),
  },
  {
    name: 'Sponge Iron Industry',
    desc: 'Essential raw material',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/><circle cx="12" cy="12" r="3"/></svg>
    ),
  },
  {
    name: 'Steel Manufacturing',
    desc: 'Blast furnace operations',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
  },
  {
    name: 'Water Filtration',
    desc: 'Filter media & purification',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    ),
  },
  {
    name: 'Power Plants',
    desc: 'Thermal power generation',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className={styles.products}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Our Products
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Premium Industrial <span className="gold-text">Products</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              Delivering top-grade coal, coke, refractory materials &amp; chemicals to power India&apos;s industrial growth
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={0.1 * index}>
              <div className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.productImage}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className={styles.productImageOverlay} />
                  <span className={styles.productBadge}>{product.badge}</span>
                </div>

                <div className={styles.productBody}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.description}</p>

                  <div className={styles.productSizes}>
                    {product.sizes.map((size) => (
                      <span key={size} className={styles.sizePill}>{size}</span>
                    ))}
                  </div>

                  <div className={styles.productDivider} />

                  <div className={styles.productFeatures}>
                    {product.features.map((feat) => (
                      <span key={feat} className={styles.featureTag}>{feat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Applications */}
        <div className={styles.applicationsSection}>
          <div className={styles.applicationsHeader}>
            <ScrollReveal>
              <span className="section-label" style={{ justifyContent: 'center' }}>
                Applications
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Industries We <span className="gold-text">Serve</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className={styles.applicationsGrid}>
            {applications.map((app, index) => (
              <ScrollReveal key={app.name} delay={0.08 * index} className={index === applications.length - 1 ? styles.appCardFullWrap : ''}>
                <div className={`${styles.appCard} ${index === applications.length - 1 ? styles.appCardFull : ''}`}>
                  <div className={styles.appIconWrap}>{app.icon}</div>
                  <h4 className={styles.appName}>{app.name}</h4>
                  <p className={styles.appDesc}>{app.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
