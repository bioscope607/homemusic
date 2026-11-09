import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Effects from '../components/Effects';

// next/font self-hosts the fonts at build time: no external font requests, no layout shift.
const head = Fraunces({ subsets: ['latin'], variable: '--font-head', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400', '500', '700'] });
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.homemusictuition.in';

export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: 'Home Music Tuition — Piano, Guitar, Violin, Tabla & Singing Classes',
    template: '%s | Home Music Tuition',
  },
  description:
    '15+ years of music education in Burnpur, Asansol & online. Expert personalized lessons in Piano, Keyboard, Guitar, Ukulele, Violin, Flute, Tabla, Classical Singing and Suro Bharati Sangeet Kala  Kendra exam preparation. Online, offline and private home tuition.',
  keywords: [
    'home music tuition',
    'music classes at home',
    'private music teacher',
    'guitar teacher near me',
    'piano lessons Asansol',
    'guitar classes Burnpur',
    'tabla classes near me',
    'violin classes West Bengal',
    'classical singing lessons',
    'flute teacher',
    'ukulele classes for kids',
    'online music lessons India',
    'Suro Bharati Sangeet Kala  Kendra exam center',
    'music tuition Paschim Bardhaman',
    'learn music at home',
  ],
  authors: [{ name: 'Home Music Tuition', url }],
  creator: 'Home Music Tuition',
  publisher: 'Home Music Tuition',
  category: 'education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Home Music Tuition — Piano, Guitar, Violin, Tabla & Singing Classes',
    description:
      'Personalized 1-on-1 music lessons at home, offline, and online. 15+ years of teaching excellence for kids, beginners and advanced learners.',
    url,
    siteName: 'Home Music Tuition',
    images: [
      {
        url: '/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Home Music Tuition - Piano, Guitar, Violin, Tabla & Singing Classes',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Music Tuition — Learn Music at Home or Online',
    description:
      'Personalized music lessons in Guitar, Piano, Tabla, Violin, Flute & Singing. 15+ years of teaching excellence & recognized exam preparation.',
    images: ['/hero-image.webp'],
  },
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
  verification: {
    google: 'jSGqnhHGOXSicllccLMrNPE2ioTsAZcT6_zt5rbCWfg',
  },
  other: {
    'geo.region': 'IN-WB',
    'geo.placename': 'Burnpur, Asansol, Paschim Bardhaman',
    'geo.position': '23.6685;86.9387',
    'ICBM': '23.6685, 86.9387',
  },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0A1F44' };

export default function RootLayout({ children }) {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MusicSchool', 'EducationalOrganization', 'LocalBusiness'],
        '@id': `${url}/#organization`,
        name: 'Home Music Tuition',
        url,
        logo: `${url}/hero-image.webp`,
        image: `${url}/hero-image.webp`,
        description:
          '15+ years of personalized music education for children and learners: Piano, Keyboard, Guitar, Ukulele, Violin, Flute, Tabla, Classical Singing, and Suro Bharati Sangeet Kala  Kendra examination preparation.',
        telephone: '+918101738358',
        email: 'homemusictui90@gmail.com',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hirapur, Burnpur',
          addressLocality: 'Burnpur',
          addressRegion: 'West Bengal',
          postalCode: '713325',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.6685,
          longitude: 86.9387,
        },
        areaServed: [
          { '@type': 'City', name: 'Burnpur' },
          { '@type': 'City', name: 'Asansol' },
          { '@type': 'AdministrativeArea', name: 'Paschim Bardhaman' },
          { '@type': 'AdministrativeArea', name: 'West Bengal' },
          { '@type': 'Country', name: 'India' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Music Lessons and Courses',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Piano & Keyboard Classes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Guitar Classes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Ukulele Classes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Violin Classes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Flute Classes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Tabla Classes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Classical Singing Classes' } },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <Effects />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
