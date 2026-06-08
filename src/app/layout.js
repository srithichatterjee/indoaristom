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
          description: 'Premium quality imported coal for industrial applications',
          image: 'https://indoaristom.com/images/imported-coal.png',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for pricing',
            availability: 'https://schema.org/InStock',
            url: 'https://indoaristom.com/#products',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Anthracite Coal',
          description: 'High-grade imported anthracite coal with superior carbon content',
          image: 'https://indoaristom.com/images/anthracite.png',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for pricing',
            availability: 'https://schema.org/InStock',
            url: 'https://indoaristom.com/#products',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Coke Fines',
          description: 'Premium quality coke fines for steel and sponge iron manufacturing',
          image: 'https://indoaristom.com/images/coke-fines.png',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for pricing',
            availability: 'https://schema.org/InStock',
            url: 'https://indoaristom.com/#products',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Water Filter Media',
          description: 'Specially processed anthracite-based water filter media',
          image: 'https://indoaristom.com/images/water-filter-media.png',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for pricing',
            availability: 'https://schema.org/InStock',
            url: 'https://indoaristom.com/#products',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Refractory Bricks',
          description: 'High-quality refractory bricks for industrial furnaces',
          image: 'https://indoaristom.com/images/refractory-bricks.png',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for pricing',
            availability: 'https://schema.org/InStock',
            url: 'https://indoaristom.com/#products',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Industrial Chemicals',
          description: 'Comprehensive range of industrial chemicals for steel manufacturing and water treatment',
          image: 'https://indoaristom.com/images/industrial-chemicals.png',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for pricing',
            availability: 'https://schema.org/InStock',
            url: 'https://indoaristom.com/#products',
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
