export const dynamic = 'force-static';

export default function robots() {
  const b = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.homemusictuition.in';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${b}/sitemap.xml`,
  };
}
