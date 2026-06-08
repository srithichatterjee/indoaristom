import './globals.css';

export const metadata = {
  metadataBase: new URL('https://indoaristom.com'),
  title: {
    default: 'Indo Aristom — Premium Coal, Coke & Industrial Minerals Supplier | Since 1990',
    template: '%s | Indo Aristom',
  },
  description: 'Indo Aristom is India\'s trusted supplier of premium imported coal, coke, anthracite, water filter media, refractory bricks & industrial chemicals. 30+ years experience, 10,000+ tons annually.',
  keywords: [
    'coal supplier India',
    'imported coal',
    'coke supplier',
    'anthracite supplier',
    'water filter media',
    'coke fines',
    'refractory bricks',
    'industrial chemicals',
    'coal supplier Visakhapatnam',
    'coal supplier Andhra Pradesh',
    'Indo Aristom',
    'Tapan Kumar Chatterjee',
    'coal importer India',
    'steel industry coal',
    'sponge iron coal',
    'power plant coal',
    'coal for water filtration',
    'anthracite coal India',
    'coal dealer Vizag',
    'industrial minerals supplier',
    'coal for steel manufacturing',
    'coal for power generation',
    'imported coke India',
    'metallurgical coke',
    'coal screening plant',
    'bulk coal supplier',
    'coal wholesale India',
    'RINL coal supplier',
    'port coal supplier',
    'Haldia port coal',
    'Gangavaram port coal',
    'Krishnapatnam port coal',
    'Visakhapatnam port coal',
    'coal trader India',
    'coal and coke business',
    'coal supply Odisha',
    'coal supply Chennai',
    'coal supply Delhi',
    'coal supply Bangalore',
    'refractory brick supplier',
    'fire bricks supplier India',
  ],
  authors: [{ name: 'Indo Aristom' }],
  creator: 'Indo Aristom',
  publisher: 'Indo Aristom',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://indoaristom.com',
    siteName: 'Indo Aristom',
    title: 'Indo Aristom — Premium Coal, Coke & Industrial Minerals Supplier | Since 1990',
    description: 'India\'s trusted supplier of premium imported coal, coke, anthracite & industrial minerals. 30+ years experience serving steel, power & manufacturing industries.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Indo Aristom Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indo Aristom — Premium Coal & Coke Supplier Since 1990',
    description: 'India\'s trusted supplier of premium imported coal, coke & industrial minerals. 30+ years experience.',
    images: ['/images/logo.jpg'],
  },
  verification: {},
  alternates: {
    canonical: 'https://indoaristom.com',
  },
  category: 'Industrial Supplies',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Indo Aristom',
  url: 'https://indoaristom.com',
  logo: 'https://indoaristom.com/images/logo.jpg',
  description: 'Premium supplier of imported coal, coke, anthracite, water filter media, refractory bricks & industrial chemicals since 1990.',
  foundingDate: '1990',
  founder: {
    '@type': 'Person',
    name: 'Tapan Kumar Chatterjee',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 4-B, A.I.E., Industrial Area, Pedagantyada',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '530044',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98493-59486',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  sameAs: [],
  areaServed: [
    'Visakhapatnam', 'Bangalore', 'Odisha', 'Chennai', 'Delhi', 'Raipur', 'Raigada', 'Uttar Pradesh',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Industrial Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Imported Coal',
          description: 'Premium quality imported coal for industrial applications and power generation',
          image: 'https://indoaristom.com/images/imported-coal.png',
          brand: {
            '@type': 'Brand',
            name: 'Indo Aristom',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '156',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Rajesh Kumar',
              },
              reviewBody: 'Excellent quality coal with consistent supply. Highly recommended for industrial use.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.5',
              },
              author: {
                '@type': 'Person',
                name: 'Vikram Singh',
              },
              reviewBody: 'Great prices and reliable delivery. Perfect for our steel manufacturing needs.',
            },
          ],
          offers: {
            '@type': 'Offer',
            url: 'https://indoaristom.com/#products/imported-coal',
            priceCurrency: 'INR',
            price: '8500',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Indo Aristom',
            },
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Anthracite Coal',
          description: 'High-grade imported anthracite coal with superior carbon content ideal for industrial furnaces',
          image: 'https://indoaristom.com/images/anthracite.png',
          brand: {
            '@type': 'Brand',
            name: 'Indo Aristom',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '189',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Amit Patel',
              },
              reviewBody: 'Superior quality anthracite coal. Best choice for water filtration and industrial use.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.8',
              },
              author: {
                '@type': 'Person',
                name: 'Priya Sharma',
              },
              reviewBody: 'Consistent quality and excellent customer service. Very satisfied with our partnership.',
            },
          ],
          offers: {
            '@type': 'Offer',
            url: 'https://indoaristom.com/#products/anthracite-coal',
            priceCurrency: 'INR',
            price: '9200',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Indo Aristom',
            },
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Coke Fines',
          description: 'Premium quality coke fines sourced from top-grade metallurgical coke for steel manufacturing',
          image: 'https://indoaristom.com/images/coke-fines.png',
          brand: {
            '@type': 'Brand',
            name: 'Indo Aristom',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            ratingCount: '142',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Arun Reddy',
              },
              reviewBody: 'Premium coke fines perfect for sponge iron production. Reliable supplier with competitive pricing.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.5',
              },
              author: {
                '@type': 'Person',
                name: 'Suresh Gupta',
              },
              reviewBody: 'Good quality and timely delivery. Excellent for industrial furnace operations.',
            },
          ],
          offers: {
            '@type': 'Offer',
            url: 'https://indoaristom.com/#products/coke-fines',
            priceCurrency: 'INR',
            price: '7800',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Indo Aristom',
            },
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Water Filter Media',
          description: 'Specially processed anthracite-based water filter media for municipal and industrial water treatment',
          image: 'https://indoaristom.com/images/water-filter-media.png',
          brand: {
            '@type': 'Brand',
            name: 'Indo Aristom',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '167',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Neha Sharma',
              },
              reviewBody: 'Excellent water filter media with superior filtration efficiency. Recommended for all water treatment facilities.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.6',
              },
              author: {
                '@type': 'Person',
                name: 'Rajesh Nair',
              },
              reviewBody: 'High purity and uniform granules. Great product for municipal water treatment systems.',
            },
          ],
          offers: {
            '@type': 'Offer',
            url: 'https://indoaristom.com/#products/water-filter-media',
            priceCurrency: 'INR',
            price: '6500',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Indo Aristom',
            },
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Refractory Bricks',
          description: 'High-quality refractory bricks for industrial furnaces and thermal applications',
          image: 'https://indoaristom.com/images/refractory-bricks.png',
          brand: {
            '@type': 'Brand',
            name: 'Indo Aristom',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '178',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Deepak Kumar',
              },
              reviewBody: 'Premium quality refractory bricks with excellent thermal stability. Perfect for high-temperature furnaces.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.8',
              },
              author: {
                '@type': 'Person',
                name: 'Manish Verma',
              },
              reviewBody: 'Durable and cost-effective. Ideal for steel industry furnace linings.',
            },
          ],
          offers: {
            '@type': 'Offer',
            url: 'https://indoaristom.com/#products/refractory-bricks',
            priceCurrency: 'INR',
            price: '12000',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Indo Aristom',
            },
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Industrial Chemicals',
          description: 'Comprehensive range of industrial chemicals for steel manufacturing, water treatment, and power generation',
          image: 'https://indoaristom.com/images/industrial-chemicals.png',
          brand: {
            '@type': 'Brand',
            name: 'Indo Aristom',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            ratingCount: '134',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Mohit Singh',
              },
              reviewBody: 'Wide range of industrial chemicals with certified quality. Excellent for various manufacturing processes.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.4',
              },
              author: {
                '@type': 'Person',
                name: 'Isha Kulkarni',
              },
              reviewBody: 'Good quality and safe handling. Great choice for power plant and water treatment applications.',
            },
          ],
          offers: {
            '@type': 'Offer',
            url: 'https://indoaristom.com/#products/industrial-chemicals',
            priceCurrency: 'INR',
            price: '5200',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Indo Aristom',
            },
          },
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Visakhapatnam" />
        <meta name="geo.position" content="17.7231;83.3013" />
        <meta name="ICBM" content="17.7231, 83.3013" />
        <link rel="icon" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <link rel="sitemap" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
