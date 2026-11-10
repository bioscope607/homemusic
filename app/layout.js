import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Effects from '../components/Effects';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// next/font self-hosts the fonts at build time: no external font requests, no layout shift.
const head = Fraunces({ subsets: ['latin'], variable: '--font-head', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400', '500', '700'] });
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.homemusictuition.in';

export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: 'Home Music Tuition — Music Classes & Tuition in Asansol & Burnpur',
    template: '%s | Home Music Tuition',
  },
  description:
    'Best home music tuition and music classes in Asansol & Burnpur. 15+ years of expert 1-on-1 lessons in Piano, Keyboard, Guitar, Ukulele, Violin, Flute, Tabla & Classical Singing at home or online. Certified exam preparation.',
  keywords: [
    'home music tuition',
    'music tuition in asansol',
    'music classes in asansol',
    'home music tuition asansol',
    'music teacher in asansol',
    'music teacher near me',
    'guitar teacher in asansol',
    'piano lessons asansol',
    'guitar classes asansol',
    'tabla classes in asansol',
    'violin classes in asansol',
    'singing classes asansol',
    'music classes at home',
    'private music teacher',
    'guitar classes Burnpur',
    'music tuition Paschim Bardhaman',
    'online music lessons India',
    'Suro Bharati Sangeet Kala Kendra exam center',
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
    title: 'Home Music Tuition — Music Classes & Tuition in Asansol & Burnpur',
    description:
      'Learn Piano, Keyboard, Guitar, Ukulele, Violin, Flute, Tabla & Classical Singing at home or online in Asansol & Burnpur. 15+ years of teaching excellence.',
    url,
    siteName: 'Home Music Tuition',
    images: [
      {
        url: '/banner.jpeg',
        width: 1200,
        height: 630,
        alt: 'Home Music Tuition - Music Classes in Asansol & Burnpur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Music Tuition — Music Classes & Tuition in Asansol & Burnpur',
    description:
      'Learn Piano, Keyboard, Guitar, Ukulele, Violin, Flute, Tabla & Classical Singing at home or online in Asansol & Burnpur. 15+ years of teaching excellence.',
    images: ['/banner.jpeg'],
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
        <Analytics />
        <SpeedInsights />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
